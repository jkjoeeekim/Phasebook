class User < ApplicationRecord
  # Create an instance variable password
  attr_reader :password

  # Model level validations
  validates :first_name, :last_name, :birthday, :gender, :password_digest, :session_token, presence: true
  validates :email, presence: true, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token

  class << self
    def find_by_credentials(email, password)
      user = User.find_by(email: email)
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
