# frameworks

This project uses Prettier to ensure consistent code formatting across all files.
Install
Prettier is already included in devDependencies, but if needed:
npm install --save-dev prettier
Format the entire project:
npm run format
Check formatting without modifying files:
npm run format:check

 Ignored files:
 The following files/folders are excluded from formatting (see .prettierignore):
	•	css/output.css (Tailwind output)
	•	node_modules
	•	dist, build
	•	All *.min.* files
