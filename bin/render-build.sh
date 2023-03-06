#!/usr/bin/env bash

# exit on error
set -o errexit

ls
npm run build
bundle install
rake db:migrate:up VERSION=20230224172151
rails db:migrate --trace
rails db:seed #if needed