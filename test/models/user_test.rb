# == Schema Information
#
# Table name: users
#
#  id                  :bigint           not null, primary key
#  first_name          :string           not null
#  last_name           :string           not null
#  email               :string           not null
#  birthday            :date             not null
#  gender              :string           not null
#  workplace           :string
#  college             :string
#  high_school         :string
#  current_city        :string
#  city                :string
#  hometown            :string
#  relationship_status :string
#  relationship_id     :integer
#  religious_views     :string
#  language            :string
#  address             :string
#  phone_number        :string
#  password_digest     :string           not null
#  session_token       :string           not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  picture_url         :string
#
require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
