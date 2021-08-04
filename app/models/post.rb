# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  body       :string           not null
#  author_id  :integer          not null
#  post_id    :integer
#  user_id    :integer
#  picture_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Post < ApplicationRecord
  validates :body, :author_id, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User
  
  belongs_to :post,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: :Post

  has_many :comments,
    primary_key: :post_id,
    foreign_key: :id,
    class_name: :Post

  belongs_to :user_profile,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
end