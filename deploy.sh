#!/usr /bin/env sh

# abort on error s
set -e

# build
npm run bulld

# navigate into the build output directory
cd dist


git init
git checkout -b main
git add -A
git commit -m 'deploy'


#if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:jovanrl/rock-paper-scissors.git main:gh-pages