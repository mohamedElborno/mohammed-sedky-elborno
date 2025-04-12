import { type SchemaTypeDefinition } from "sanity";
import { books } from "./books";
import { localeString } from "./types/localeStringType";
import { localeText } from "./types/localeTextType";
import { media } from "./media";
import { homePage } from "./homePage";
import { biography } from "./biography";
import { localeBlock } from "./types/loclaleBlockType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    localeString,
    localeText,
    localeBlock,
    homePage,
    books,
    media,
    biography,
  ],
};
