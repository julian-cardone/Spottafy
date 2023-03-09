#!/usr/bin/env bash

# exit on error
set -o errexit

ls
npm run build
bundle install
rails db:migrate
rails db:seed