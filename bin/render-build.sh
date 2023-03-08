#!/usr/bin/env bash

# exit on error
set -o errexit

ls
npm run build
bundle install
rails db:migrate RAILS_ENV=production
rails db:seed RAILS_ENV=production #if needed