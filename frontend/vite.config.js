import { defineConfig } from "vite";
import fs from 'fs';
import path from 'path';
import react from "@vitejs/plugin-react";

export default defineConfig({

  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'localhost-key.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, 'localhost.pem'))
    },
    port: 3000,
    // そのほか設定
  },
  plugins: [react()],
});