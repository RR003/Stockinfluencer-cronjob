import mongoose from "mongoose";

const TweetSchema = mongoose.Schema({
  Stock: { type: String, required: true },
  Tweet: { type: String, requried: true },
  Time: { type: Date, required: true },
  User: { type: String, required: true },
  ShortTermChange: { type: Double, required: true },
  LongTermChange: { type: Double, required: true },
});

export default mongoose.model("Tweet", TweetSchema);
