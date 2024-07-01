import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig(() => {
  const base = process.env.BASE_URL ? `/${process.env.BASE_URL}/` : "/";

  return {
    base,
    plugins: [react()],
  };
});
