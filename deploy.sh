#!/usr/bin/env sh

# ��o�Ϳ��~�ɤ���}��
set -e

# �c��
npm run build

# cd ��c�ؿ�X���ؿ��U 
cd dist

# ���p��۩w�q���W
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# ���p�� https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# ���p�� https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -