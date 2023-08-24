// config.js
// The prettier configuration for express-rate-limit projects.

const config = {
	semi: false,
	useTabs: true,
	singleQuote: true,
	bracketSpacing: true,
	trailingComma: 'all',
	proseWrap: 'always',
	endOfLine: 'lf',
	overrides: [
		{
			files: ['package.json', 'package-lock.json'],
			options: {
				useTabs: false,
				tabWidth: 2,
			},
		},
	],
}

module.exports = config
