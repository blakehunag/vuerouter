#!/usr/bin/env sh

# 讽祇ネ岿粇いゎ竲セ
set -e

# 篶
npm run build

# cd 篶块ヘ魁 
cd dist

# 场竝﹚竡办办
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 场竝 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 场竝 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -