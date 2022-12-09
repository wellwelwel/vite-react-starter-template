#! /usr/bin/env bash

rm -rf src/assets src/pages;
cp -r .github/assets/resources/ ./;
rm -rf .git .github README.md clean.sh;
