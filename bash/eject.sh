#! /usr/bin/env bash

# ---------------------------------------------------------------------- #
#   This command is executed by the final multistaged docker container   #
# ---------------------------------------------------------------------- #

# Build production files
npm run build;

# Remove development files
rm -rf .git
rm -rf .github
rm -rf .vscode
rm -rf node_modules
rm -rf src
rm -rf .eslintrc.js
rm -rf .gitignore
rm -rf .prettierignore
rm -rf .prettierrc
rm -rf .stackblitzrc
rm -rf index.html
rm -rf package.json
rm -rf vite.config.js
rm -rf *.sh
rm -rf *.md;

# Install package-lock.json dependencies
echo '{"dependencies": {"axios": "^0.27.2","connect": "^3.7.0","express": "^4.18.1","vhost": "^3.0.2"}}' | cat > package.json;
npm ci --ignore-scripts;
npm audit fix;