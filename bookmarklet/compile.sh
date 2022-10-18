

OUTFILE="./dist/bookmarklet.txt"



# Compile the bundle
cd ../main/
pnpm install
pnpm tsc
pnpm webpack ./dist/WASD.js --mode production --output-path ./dist/
cd ../bookmarklet


# Completley erase this file (delte, remake)
rm $OUTFILE
touch $OUTFILE

# Add javascript:
echo "javascript:" >> $OUTFILE

# Using extension = false, because we're using the bookmarklet
echo "window.ProdigyWASDextension=false;" >> $OUTFILE


# Copy and paste the bundle to OUTFILE.
cat ../main/dist/main.js >> $OUTFILE

