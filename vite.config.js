import { sveltekit } from "@sveltejs/kit/vite";
import fs from "vite-plugin-fs";

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit(), fs()],
  server: {
    port: 3000,
  },
};

export default config;
