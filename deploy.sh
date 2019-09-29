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

# ���p��  https://github.com/blakehunag/vuerouter.git
# git push -f  https://github.com/blakehunag/vuerouter.git master

# ���p�� https://<USERNAME>.github.io/<REPO>
git push -f  https://github.com/blakehunag/vuerouter.git master:gh-pages

cd -