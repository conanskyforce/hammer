
cd ../ 
rm -rf hammer*zip
zip -r 'hammer.zip' 'hammer/' \
-x 'hammer/pack.sh' \
-x 'hammer/seo_desc' \
-x 'hammer/*.git*'
