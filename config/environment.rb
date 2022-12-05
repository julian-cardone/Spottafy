# Load the Rails application.
require_relative "application"

# Initialize the Rails application.
Rails.application.initialize!

# Update environment.rb to format keys from backend to frontend (camelize)

Jbuilder.key_format camelize: :lower
Jbuilder.deep_format_keys true
