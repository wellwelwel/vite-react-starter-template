#! /usr/bin/env bash

DOCKER="./docker";
APP="${DOCKER}/app";
DIST="${APP}/dist";

# Reset
rm -rf ./dist $APP && \
   cd $DOCKER && \
   # (docker-compose --env-file ../.env down &> /dev/null) && \
   rm -rf ./app;

# Prepare files
cd .. && \
   mkdir -p $DIST && \
   echo '{"type":"module"}' | cat > $APP/package.json && \
   rsync -avq ./.env $APP/.env && \
   npm run server:build && \
   rsync -avq ./dist/frontend $DIST && \
   npx rollup -c;

cd $APP && \
   npm i mysql2 ioredis --ignore-scripts && \
   npm i packages-update -D --ignore-scripts && \
   npx npu --lock && \
   npm uninstall packages-update && \
   npm prune && \
   npm i --ignore-scripts && \
   npm audit fix;

cd ../.. && \
   find $DIST -type d -exec chmod 755 {} + && \
   find $DIST -type f -exec chmod 644 {} + && \
   chmod 0600 $APP/.env;

# Compose
cd $DOCKER && \
   docker-compose --env-file ../.env up -d;
