import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import compression from "vite-plugin-compression";

export default defineConfig({
    plugins: [
        react(),
        visualizer({
            open: true,
            filename: "bundle-analysis.html",
            template: "treemap",
        }),
        compression({
            algorithm: "brotliCompress", 
            ext: ".br", 
        }),
    ],
    assetsInclude: [
        "**/*.jpg",
        "**/*.jpeg",
        "**/*.png",
        "**/*.gif",
        "**/*.svg",
    ],
});
