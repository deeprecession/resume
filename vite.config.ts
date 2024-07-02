import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig(() => {
  const isGithubPages = process.env.DEPLOY_ENV === "GH_PAGES";

  return {
    base: isGithubPages ? "/inno-frontend-course/" : "/",
    plugins: [react()],
  };
});
