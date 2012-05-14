# This file is copied to spec/ when you run 'rails generate rspec:install'
ENV["RAILS_ENV"] ||= 'test'
require File.expand_path("../../config/environment", __FILE__)
require 'rspec/rails'
require 'rspec/autorun'

# Requires supporting ruby files with custom matchers and macros, etc,
# in spec/support/ and its subdirectories.
Dir[Rails.root.join("spec/support/**/*.rb")].each {|f| require f}

RSpec.configure do |config|
  config.infer_base_class_for_anonymous_controllers = false
end

RSpec::Matchers.define :be_cactus do
  match do |actual|
    all(".cactus_fail").blank?
  end

  failure_message_for_should do |actual|
    message = "Oei! Something is wrong with the CSS on '#{actual.current_url}' lah!\n"
    all(".cactus_fail").each do |failure|
      message += "- #{failure.text}\n"
    end
    message
  end
end
