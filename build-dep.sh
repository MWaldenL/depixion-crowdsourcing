npm run build
rm -rf public/
mv dist public
firebase deploy
