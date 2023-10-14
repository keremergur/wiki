#!/bin/bash

hugo
firebase deploy
git push

# chmod a+x <filename>.sh