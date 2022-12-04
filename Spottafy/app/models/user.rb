# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord

    
    has_secure_password

    validates :username, uniqueness: true, length: { in: 3..25}, format: { without: URI::MailTo::EMAIL_REGEXP, message:  "Username cannot be an email" }
    validtes :email, uniqueness: true, length: { in: 3..255 }, format: { with: URI::MailTo::EMAIL_REGEXP, message: "Please enter a valid email" }
    valdites :session_token, presence: true, uniqueness: true
    validates :password, length: { in: 6..100 }, allow_nil: true

    before_validation :ensure_session_token

    def self.find_by_credentials(credential, password)
        field = credential == URI::MailTo::EMAIL_REGEXP ? :email : :username
        user = User.find_by(field: credential)
        user&.authenticate(password)
    end

    def reset_session_token!
        session_token = generate_unique_session_token
        self.update!
        self.session_token
    end

    private

    def generate_unique_session_token
        while true do
            token = SecureRandom.urlsafe_base64
            User.exists?(sesson_token: token) ? next : break 
            #seems inefficient, what if there are a million users? is there a better way to do this?
        end
    end

    def ensure_session_token
        self.session_token ||= generate_unique_session_token
    end

end
