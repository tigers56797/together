import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig(({ command, mode }) => {
  return {
    plugins: [vue()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"), // 設置 alias
      },
    },
    base: command === "serve" ? "/" : "/together/", // 本地開發時為 "/"，部署時為 "/together/"
  };
});
