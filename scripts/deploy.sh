#!/bin/bash

# This is the deploy script for the Goldman Sachs Engagement Layer
# It will be copied to the directory on the server then run
# This is so that it can be kept in version control and edited without logging in to the server

NUMBER_OF_VERSIONS_TO_KEEP=5
SITE_NAME=www.gspensions.co.uk
PATH_PREFIX=/var/www/$SITE_NAME

NEWEST_VERSION=$(ls $PATH_PREFIX/releases -t | head -n1)
NEWEST_VERSION_PATH=$PATH_PREFIX/releases/$NEWEST_VERSION

echo Newest version is $NEWEST_VERSION_PATH
echo Creating symlink...
ln -nsf $NEWEST_VERSION_PATH $PATH_PREFIX/current/public

if [ $(ls $PATH_PREFIX/releases | wc -w) -gt 5 ]
then
  VERSION_TO_DELETE=$(ls $PATH_PREFIX/releases -1 | head -n1)
  echo we are keeping the last $NUMBER_OF_VERSIONS_TO_KEEP so we are deleting $VERSION_TO_DELETE
  rm -rf $PATH_PREFIX/releases/$VERSION_TO_DELETE
else
  echo we are keeping the last $NUMBER_OF_VERSIONS_TO_KEEP versions
fi
