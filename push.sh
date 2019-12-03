#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# git init
git pull git@github.com:jacksonvong/iways-ui.git master
git add -A
git commit -m 'update'
git push -f git@github.com:jacksonvong/iways-ui.git master

cd -