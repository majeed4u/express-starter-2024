import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'], // Entry point of your application
    outDir: 'dist',          // Output directory
    target: 'esnext',        // Specify the target environment
    format: ['esm', 'cjs'],  // Output both ESM and CommonJS formats
    sourcemap: true,         // Generate sourcemaps for debugging
    clean: true,             // Clean the output directory before each build
    dts: true,               // Generate TypeScript declaration files
    esbuildOptions: (options) => {
        options.plugins = [
            require('esbuild-plugin-tsconfig-paths')(), // Resolve aliases
        ];
    },
});
