import {defineConfig, splitVendorChunkPlugin} from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import tsconfigPaths from "vite-tsconfig-paths"
import reactJsx from "vite-react-jsx";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		splitVendorChunkPlugin(),
		reactJsx(),
		reactRefresh(),
		tsconfigPaths(),
	],
	build: {
		rollupOptions: {
			output: {
				entryFileNames: `assets/[name].js`,
				chunkFileNames: `assets/[name].js`,
				assetFileNames: `assets/[name].[ext]`,
			},
		},
	},
	server: {
		proxy: {
			'^/index.php/api.*': {
				target: 'http://127.0.0.1:8080/',
				changeOrigin: true,
			},
		},
	},
});
