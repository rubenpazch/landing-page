require 'faker'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Picture.delete_all
Comment.delete_all
Restaurant.delete_all

r1 = Restaurant.create!(title: Faker::Restaurant.name, description: Faker::Restaurant.description)
r2 = Restaurant.create!(title: Faker::Restaurant.name, description: Faker::Restaurant.description)
r3 = Restaurant.create!(title: Faker::Restaurant.name, description: Faker::Restaurant.description)
r4 = Restaurant.create!(title: Faker::Restaurant.name, description: Faker::Restaurant.description)
r5 = Restaurant.create!(title: Faker::Restaurant.name, description: Faker::Restaurant.description)
r6 = Restaurant.create!(title: Faker::Restaurant.name, description: Faker::Restaurant.description)
r7 = Restaurant.create!(title: Faker::Restaurant.name, description: Faker::Restaurant.description)
r8 = Restaurant.create!(title: Faker::Restaurant.name, description: Faker::Restaurant.description)
r9 = Restaurant.create!(title: Faker::Restaurant.name, description: Faker::Restaurant.description)
r10 = Restaurant.create!(title: Faker::Restaurant.name, description: Faker::Restaurant.description)
r11 = Restaurant.create!(title: Faker::Restaurant.name, description: Faker::Restaurant.description)
r12 = Restaurant.create!(title: Faker::Restaurant.name, description: Faker::Restaurant.description)
r13 = Restaurant.create!(title: Faker::Restaurant.name, description: Faker::Restaurant.description)
r14 = Restaurant.create!(title: Faker::Restaurant.name, description: Faker::Restaurant.description)
r15 = Restaurant.create!(title: Faker::Restaurant.name, description: Faker::Restaurant.description)
r16 = Restaurant.create!(title: Faker::Restaurant.name, description: Faker::Restaurant.description)
r17 = Restaurant.create!(title: Faker::Restaurant.name, description: Faker::Restaurant.description)

(0..15).each do |i|
  Comment.create!(
    description: Faker::Restaurant.review,
    commentDate: Faker::Date.between(from: '2021-03-24', to: '2024-09-25'),
    usuario: Faker::Alphanumeric.alpha(number: 10),
    restaurant_id: r1.id
  )
end

(0..15).each do |i|
  Comment.create!(
    description: Faker::Restaurant.review,
    commentDate: Faker::Date.between(from: '2021-03-24', to: '2024-09-25'),
    usuario: Faker::Alphanumeric.alpha(number: 10),
    restaurant_id: r2.id
  )
end

(0..15).each do |i|
  Comment.create!(
    description: Faker::Restaurant.review,
    commentDate: Faker::Date.between(from: '2021-03-24', to: '2024-09-25'),
    usuario: Faker::Alphanumeric.alpha(number: 10),
    restaurant_id: r3.id
  )
end

(0..15).each do |i|
  Comment.create!(
    description: Faker::Restaurant.review,
    commentDate: Faker::Date.between(from: '2021-03-24', to: '2024-09-25'),
    usuario: Faker::Alphanumeric.alpha(number: 10),
    restaurant_id: r4.id
  )
end

(0..15).each do |i|
  Comment.create!(
    description: Faker::Restaurant.review,
    commentDate: Faker::Date.between(from: '2021-03-24', to: '2024-09-25'),
    usuario: Faker::Alphanumeric.alpha(number: 10),
    restaurant_id: r5.id
  )
end

(0..15).each do |i|
  Comment.create!(
    description: Faker::Restaurant.review,
    commentDate: Faker::Date.between(from: '2021-03-24', to: '2024-09-25'),
    usuario: Faker::Alphanumeric.alpha(number: 10),
    restaurant_id: r6.id
  )
end

(0..15).each do |i|
  Comment.create!(
    description: Faker::Restaurant.review,
    commentDate: Faker::Date.between(from: '2021-03-24', to: '2024-09-25'),
    usuario: Faker::Alphanumeric.alpha(number: 10),
    restaurant_id: r7.id
  )
end

(0..15).each do |i|
  Comment.create!(
    description: Faker::Restaurant.review,
    commentDate: Faker::Date.between(from: '2021-03-24', to: '2024-09-25'),
    usuario: Faker::Alphanumeric.alpha(number: 10),
    restaurant_id: r8.id
  )
end

(0..15).each do |i|
  Comment.create!(
    description: Faker::Restaurant.review,
    commentDate: Faker::Date.between(from: '2021-03-24', to: '2024-09-25'),
    usuario: Faker::Alphanumeric.alpha(number: 10),
    restaurant_id: r9.id
  )
end

(0..15).each do |i|
  Comment.create!(
    description: Faker::Restaurant.review,
    commentDate: Faker::Date.between(from: '2021-03-24', to: '2024-09-25'),
    usuario: Faker::Alphanumeric.alpha(number: 10),
    restaurant_id: r10.id
  )
end

(0..15).each do |i|
  Comment.create!(
    description: Faker::Restaurant.review,
    commentDate: Faker::Date.between(from: '2021-03-24', to: '2024-09-25'),
    usuario: Faker::Alphanumeric.alpha(number: 10),
    restaurant_id: r11.id
  )
end

(0..15).each do |i|
  Comment.create!(
    description: Faker::Restaurant.review,
    commentDate: Faker::Date.between(from: '2021-03-24', to: '2024-09-25'),
    usuario: Faker::Alphanumeric.alpha(number: 10),
    restaurant_id: r12.id
  )
end


(0..15).each do |i|
  Comment.create!(
    description: Faker::Restaurant.review,
    commentDate: Faker::Date.between(from: '2021-03-24', to: '2024-09-25'),
    usuario: Faker::Alphanumeric.alpha(number: 10),
    restaurant_id: r13.id
  )
end

(0..15).each do |i|
  Comment.create!(
    description: Faker::Restaurant.review,
    commentDate: Faker::Date.between(from: '2021-03-24', to: '2024-09-25'),
    usuario: Faker::Alphanumeric.alpha(number: 10),
    restaurant_id: r14.id
  )
end

(0..15).each do |i|
  Comment.create!(
    description: Faker::Restaurant.review,
    commentDate: Faker::Date.between(from: '2021-03-24', to: '2024-09-25'),
    usuario: Faker::Alphanumeric.alpha(number: 10),
    restaurant_id: r15.id
  )
end

(0..15).each do |i|
  Comment.create!(
    description: Faker::Restaurant.review,
    commentDate: Faker::Date.between(from: '2021-03-24', to: '2024-09-25'),
    usuario: Faker::Alphanumeric.alpha(number: 10),
    restaurant_id: r16.id
  )
end

(0..15).each do |i|
  Comment.create!(
    description: Faker::Restaurant.review,
    commentDate: Faker::Date.between(from: '2021-03-24', to: '2024-09-25'),
    usuario: Faker::Alphanumeric.alpha(number: 10),
    restaurant_id: r17.id
  )
end

(0..4).each do |i|
  Picture.create!(link: Faker::Avatar.image, restaurant_id: r1.id)
end
(0..4).each do |i|
  Picture.create!(link: Faker::Avatar.image, restaurant_id: r2.id)
end
(0..4).each do |i|
  Picture.create!(link: Faker::Avatar.image, restaurant_id: r3.id)
end
(0..4).each do |i|
  Picture.create!(link: Faker::Avatar.image, restaurant_id: r4.id)
end
(0..4).each do |i|
  Picture.create!(link: Faker::Avatar.image, restaurant_id: r5.id)
end
(0..4).each do |i|
  Picture.create!(link: Faker::Avatar.image, restaurant_id: r6.id)
end
(0..4).each do |i|
  Picture.create!(link: Faker::Avatar.image, restaurant_id: r7.id)
end
(0..4).each do |i|
  Picture.create!(link: Faker::Avatar.image, restaurant_id: r8.id)
end
(0..4).each do |i|
  Picture.create!(link: Faker::Avatar.image, restaurant_id: r9.id)
end
(0..4).each do |i|
  Picture.create!(link: Faker::Avatar.image, restaurant_id: r10.id)
end
(0..4).each do |i|
  Picture.create!(link: Faker::Avatar.image, restaurant_id: r11.id)
end
(0..4).each do |i|
  Picture.create!(link: Faker::Avatar.image, restaurant_id: r12.id)
end
(0..4).each do |i|
  Picture.create!(link: Faker::Avatar.image, restaurant_id: r13.id)
end
(0..4).each do |i|
  Picture.create!(link: Faker::Avatar.image, restaurant_id: r14.id)
end
(0..4).each do |i|
  Picture.create!(link: Faker::Avatar.image, restaurant_id: r15.id)
end
(0..4).each do |i|
  Picture.create!(link: Faker::Avatar.image, restaurant_id: r16.id)
end
(0..4).each do |i|
  Picture.create!(link: Faker::Avatar.image, restaurant_id: r17.id)
end

