

OUTFILE="./dist/bookmarklet.txt"

# Completley erase this file (delte, remake)
rm $OUTFILE
touch $OUTFILE

# Add javascript:
echo "javascript:" >> $OUTFILE

# Compile the bundle
cd ../main/
npm install
npx tsc
npx webpack ./dist/WASD.js --mode production --output-path ./dist/ 

# Go back to the bookmarklet
cd ../bookmarklet

# Copy and paste the bundle to OUTFILE.
cat ../main/dist/main.js >> $OUTFILE

