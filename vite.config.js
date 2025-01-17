import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  esbuild: {
    jsx: "transform",
    jsxFactory: "createElement",
    jsxInject: `import { createElement } from '@/lib/react/createElement.js'`,
  },
});
