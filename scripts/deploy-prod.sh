#!/bin/bash

echo "Deploying to Production"

PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g')

echo "Current Version: $PACKAGE_VERSION"

firebase deploy --only hosting:prod --message "Release: $PACKAGE_VERSION";

echo "Deployment Complete"