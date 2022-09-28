# PWMx Build Script


# [string] Log Prefix
PREFIX="[PWMx Builder] "

# [string] WASD.js output
WASDJS="./src/WASD.js"

# [function(string)] Function to echo with prefix
xlog () {
   echo "$PREFIX$1"
}

# [function(string)] to exit with message
ext () {
   echo "$1"
   exit 0
}


echo ""


# Compile the bundle
cd ../main/
npm install
npx tsc
npx webpack ./dist/WASD.js --mode production --output-path ./dist/ 


# Copy the bundle to the extension
cd ../extension 

# Remove the WASD.js file
rm $WASDJS && xlog "Deleted WASD.js"

# Create the WASD.js file
touch $WASDJS && xlog "Created WASD.js"

# Add a notice about the source code to the WASD.js file
echo "/* This file is generated with code to WASD movement in Prodigy. The full source code is available at https://github.com/ProdigyPNP/ProdigyWASD */" >> $WASDJS

# Copy and paste the bundle to the WASD.js file.
cat ../main/dist/main.js >> $WASDJS && xlog "Added code to WASD.js"


xlog "";


# Delete build/extension.zip
xlog "Deleting extension.zip..."
rm build/extension.zip && xlog "Deleted extension.zip" || xlog "No extension.zip found"


# Delete build/extension.xpi
xlog "Deleting extension.xpi..."
rm build/extension.xpi && xlog "Deleted extension.xpi" || xlog "No extension.xpi found"
echo ""




# Tell the user that the chromium extension is being zipped
xlog "Zipping chromium extension..."

# Go into ./src/
cd ./src/

# Zip ./src/ to ./build.extension.zip
zip -q -r ../build/extension.zip ./ && xlog ".ZIP chromium extension built -> extension.zip"

# Tell the user that we've build the chromium extension successfully.
xlog "Chromium extension Success!" && echo ""




# No firefox support ye

# Go out of ./src/ and into ./firefox/
# cd ../firefox/

# Zip ./firefox/ to ./build.extension.xpi
# zip -q -r ../build/extension.xpi ./ && xlog ".XPI file built -> extension.xpi"


# Tell the user that we've build the firefox extension successfully.
# xlog "Firefox extension Success!" && echo ""




# When making .crx extensions, it needs to be signed with a private key file to work.
# Tell the user that extension.crx needs to be signed if it's a production-used release.
echo "\033[0;31m" && xlog "IMPORTANT: IF YOU ARE MAKING AN OFFICIAL PWMx RELEASE, THEN PLEASE REMEMBER TO SIGN THE .CRX WITH A PRIVATE KEY FILE." && echo ""

# Tell the user that we're done.
echo "\033[0m" && xlog "Done!"
