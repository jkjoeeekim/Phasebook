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
class User < ApplicationRecord
  # Create an instance variable password
  attr_reader :password

  # Model level validations
  validates :first_name, :last_name, :birthday, :gender, :password_digest, :session_token, presence: true
  validates :email, presence: true, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  
  after_initialize :ensure_session_token
  
  has_one_attached :photo

  has_many :friendships,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Friendship

  has_many :friends,
    through: :friendships,
    source: :friend

  has_many :posts,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Post

  has_many :profile_posts,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Post

  class << self
    def find_by_credentials(email, password)
      user = User.find_by(email: email.downcase)
      return nil unless user
      user.is_password?(password) ? user : nil
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(24)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(24)
    self.save
    self.session_token
  end
end
