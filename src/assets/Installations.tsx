// npm create vite@latest > React > Typescript > npm i > npm i -D tailwindcss postcss autoprefixer > npx tailwind init -p

// tailwind.config.js
// /** @type {import('tailwindcss').Config} */
// export default {
//     content: [
//       "./index.html",
//       "./src/**/*.{js,ts,jsx,tsx}",
//     ],
//     theme: {
//       extend: {},
//     },
//     plugins: [],
//   }

// index.css
// @tailwind base;
// @tailwind components;
// @tailwind utilities;

// npm run dev (Initial setup done)

// For using ShadCN UI
// tsconfig.json
// After this line - "skipLibCheck": true,
// "baseUrl": ".",
// "paths": {
//   "@/*": [
//     "./src/*"
//   ]
// },

// npm i -D @types/node

// vite.config.ts
// import path from "path"
// import react from "@vitejs/plugin-react"
// import { defineConfig } from "vite"

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// })

// npx shadcn-ui@latest init
// Would you like to use TypeScript (recommended)? yes
// Which style would you like to use? › Default
// Which color would you like to use as base color? › Slate
// Where is your global CSS file? › › src/index.css
// Do you want to use CSS variables for colors? › yes
// Where is your tailwind.config.js located? › tailwind.config.js
// Configure the import alias for components: › @/components
// Configure the import alias for utils: › @/lib/utils
// Are you using React Server Components? › no

// To use shadcn Button - npx shadcn-ui@latest add button
