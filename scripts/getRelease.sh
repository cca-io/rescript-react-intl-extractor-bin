#!/bin/bash

RELEASE=$1
if [ -z $RELEASE ]; then
  echo "Usage: $0 <version>"
  exit 1
fi

rm -rf linux macos windows

for platform in linux macos windows
do
    wget https://github.com/cca-io/rescript-react-intl-extractor/releases/download/v${RELEASE}/rescript-react-intl-extractor-${RELEASE}-${platform}.zip
    unzip rescript-react-intl-extractor-${RELEASE}-${platform}.zip -d ${platform}
    rm rescript-react-intl-extractor-${RELEASE}-${platform}.zip
done

chmod +x linux/rescript-react-intl-extractor macos/rescript-react-intl-extractor
