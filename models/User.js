import mongooose, { Schema } from "mongoose";

const linkSchema = Schema({
  iconName: { type: String },
  label: { type: String },
  link: { type: String },
})

const articleSchems = Schema({
  title: { type: String },
  article: { type: String },
  image: { type: String },
  links: [linkSchema],
});

const userSchema = mongooose.Schema(
  {
    name: { type: String },
    email: { type: String },
    password: { type: String },
    articles: [articleSchems],
  }
);

mongooose.models = {}

const User = mongooose.model("User", userSchema);
export default User;
