import mongooose, { Schema } from "mongoose";

const linkSchema = Schema({
  iconName: { type: String },
  label: { type: String },
  link: { type: String },
})

const articleSchems = Schema({
  profileImage: { type: String },
  categoryLink: { type: String },
  thumbnail: { type: String },
  link: { type: String },
  socialLinks: [linkSchema],
  heading: { type: String },
  date: { type: String },
  authorName: { type: String },
  category: { type: String },
  timeToRead: { type: String },
  article: { type: String },
  slug: { type: String },
});

const userSchema = mongooose.Schema(
  {
    name: { type: String },
    email: { type: String },
    password: { type: String },
    articles: [articleSchems],
    userid: { type: String },
    savedArticle: [String],
  }
);

mongooose.models = {}

const User = mongooose.model("User", userSchema);
export default User;
