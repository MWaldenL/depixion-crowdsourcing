npm run build
rm -rf public/
mv dist public
firebase deploy --only hosting:depixion-surveyswap
