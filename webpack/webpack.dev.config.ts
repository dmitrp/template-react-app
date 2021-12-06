import baseConfig from "./webpack.base.config";

const config = {
	...baseConfig,
	mode: "development",
	devtool: "eval-source-map",
	watch: true,
};

export default config;
