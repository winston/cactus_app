require 'spec_helper'

describe 'rspec and capybara integration with cactus', js: true do
  it "is cactus-ready " do
    visit root_path
    page.should be_cactus
  end
end
