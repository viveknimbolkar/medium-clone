import mongooose from "mongoose";

const socialLinksSchema = mongooose.Schema({
    iconName: { type: String },
    label: { type: String },
    link: { type: String },

})
const articleSchema = mongooose.Schema(
    {
        profileImage: { type: String },
        categoryLink: { type: String },
        thumbnail: { type: String },
        link: { type: String },
        socialLinks: [socialLinksSchema],
        heading: { type: String },
        date: { type: String },
        authorName: { type: String },
        category: { type: String },
        timeToRead: { type: String },
        article: { type: String },
        slug: { type: String },
    }
);

mongooose.models = {}

const Article = mongooose.model("Article", articleSchema);
export default Article;
