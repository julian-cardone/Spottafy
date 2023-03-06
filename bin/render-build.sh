#!/usr/bin/env bash

# exit on error
set -o errexit

ls
npm run build
bundle install
bundle exec rake assets:precompile
bundle exec rake assets:clean
bundle exec rake db:migrate
rails db:migrate
rails db:seed #if needed