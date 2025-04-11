/// <reference types="cypress" />
/// <reference types="@cypress/react" />
import { Interception } from 'cypress/types/net-stubbing';
import { mount } from '@cypress/react';
import ContactForm from '../../src/components/ContactForm.tsx';

describe('ContactForm component', () => {
  beforeEach(() => {
    mount(<ContactForm />);
  });

  it('should render the contact form', () => {
    cy.get('input[name="name"]').should('exist');
    cy.get('input[name="email"]').should('exist');
    cy.get('input[name="phoneNumber"]').should('exist');
    cy.get('input[name="message"]').should('exist');
    cy.get('button[type="submit"]').should('exist');
  });

  it('should display validation errors when submitting empty form', () => {
    cy.get('button[type="submit"]').click();
    cy.contains('Le nom est requis.').should('be.visible');
    cy.contains("Veuillez entrer une adresse email valide.").should('be.visible');
    cy.contains("Le numéro de téléphone est requis.").should('be.visible');
    cy.contains('Le message est requis.').should('be.visible');
  });

  it('should display an error for invalid phone number', () => {
    cy.get('input[name="phoneNumber"]').type('123');
    cy.get('button[type="submit"]').click();
    cy.contains("Veuillez entrer un numéro de téléphone valide.").should('be.visible');
  });

  it('should allow valid input and display success message', () => {
    cy.intercept('POST', `https://api.emailjs.com/api/v1.0/email/send`).as('emailSend');

    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="email"]').type('john.doe@example.com');
    cy.get('input[name="phoneNumber"]').type('06 01 02 03 04');
    cy.get('input[name="message"]').type('Hello, this is a test message.');
    cy.get('button[type="submit"]').click();

    cy.wait('@emailSend').then((interception: Interception) => {
      expect(interception.response?.statusCode ?? 0).to.eq(200);
      cy.on('window:alert', (str: string) => {
        expect(str).to.equal('Votre message a été envoyé avec succès.');
      });
    });
  });

  it('should handle submission errors', () => {
    cy.intercept('POST', `https://api.emailjs.com/api/v1.0/email/send`, { forceNetworkError: true }).as('emailSend');

    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="email"]').type('john.doe@example.com');
    cy.get('input[name="phoneNumber"]').type('06 01 02 03 04');
    cy.get('input[name="message"]').type('Hello, this is a test message.');
    cy.get('button[type="submit"]').click();

    cy.wait('@emailSend');

    cy.on('window:alert', (str) => {
      expect(str).to.equal('Une erreur est survenue. Veuillez réessayer.');
    });
  });
});
