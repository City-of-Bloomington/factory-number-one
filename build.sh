#!/bin/bash
APPNAME=assets
DIR=`pwd`
BUILD=$DIR/build

# Compile the SASS
if [ ! -d $BUILD/$APPNAME/css ]
    then mkdir -p $BUILD/$APPNAME/css
fi
sass --style compact $DIR/src/themes/default/scss/default.scss $BUILD/$APPNAME/css/default.css

# Copy files into the build
#rsync -rlv --exclude-from=$DIR/buildignore --delete $DIR/ $BUILD/$APPNAME

cd $BUILD
tar czvf $APPNAME.tar.gz $APPNAME
