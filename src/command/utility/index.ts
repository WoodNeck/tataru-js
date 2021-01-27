import Avatar from "./avatar";
import Dice from "./dice";
import Choose from "./choose";
import Say from "./say";
import Vote from "./vote";

import Category from "~/core/Category";
import { UTILITY } from "~/const/category";
import * as EMOJI from "~/const/emoji";

const category = new Category({
  name: UTILITY.NAME,
  description: UTILITY.DESC,
  categoryEmoji: EMOJI.TOOLS,
  commandEmoji: EMOJI.SMALL_BLUE_DIAMOND
});

category.add(
  Avatar,
  Dice,
  Choose,
  Say,
  Vote
);

export default category;