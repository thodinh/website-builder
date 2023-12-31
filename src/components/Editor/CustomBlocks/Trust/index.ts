import { Editor } from "grapesjs";
import {
  beforeAfter1Block,
  beforeAfter1Component,
} from "./Blocks/beforeAfter1";
import {
  beforeAfter2Block,
  beforeAfter2Component,
} from "./Blocks/beforeAfter2";
import {
  beforeAfter4Block,
  beforeAfter4Component,
} from "./Blocks/beforeAfter4";
import {
  beforeAfter3Block,
  beforeAfter3Component,
} from "./Blocks/beforeAfter3";
import {
  clientListLogos1Block,
  clientListLogos1Component,
} from "./Blocks/clientListLogos1";
import {
  clientListLogos4Block,
  clientListLogos4Component,
} from "./Blocks/clientListLogos4";
import {
  clientListLogos3Block,
  clientListLogos3Component,
} from "./Blocks/clientListLogos3";
import {
  clientListLogos2Block,
  clientListLogos2Component,
} from "./Blocks/clientListLogos2";
import {
  reviewsAndRatings1Block,
  reviewsAndRatings1Component,
} from "./Blocks/reviewsAndRatings1";
import {
  reviewsAndRatings2Block,
  reviewsAndRatings2Component,
} from "./Blocks/reviewsAndRatings2";
import {
  reviewsAndRatings3Block,
  reviewsAndRatings3Component,
} from "./Blocks/reviewsAndRatings3";
import {
  reviewsAndRatings4Block,
  reviewsAndRatings4Component,
} from "./Blocks/reviewsAndRatings4";
import {
  testimonials1Block,
  testimonials1Component,
} from "./Blocks/testimonials1";
import {
  testimonials2Block,
  testimonials2Component,
} from "./Blocks/testimonials2";
import {
  testimonials3Block,
  testimonials3Component,
} from "./Blocks/testimonials3";
import {
  endorsements3Block,
  endorsements3Component,
} from "./Blocks/endorsements3";
import {
  endorsements2Block,
  endorsements2Component,
} from "./Blocks/endorsements2";
import {
  endorsements1Block,
  endorsements1Component,
} from "./Blocks/endorsements1";
import {
  testimonials4Block,
  testimonials4Component,
} from "./Blocks/testimonials4";
import { faquc1Block, faquc1Component } from "./Blocks/faquc1";
import { faquc3Block, faquc3Component } from "./Blocks/faquc3";
import { faquc2Block, faquc2Component } from "./Blocks/faquc2";

export default function initTrust(editor: Editor) {
  faquc1Block(editor);
  faquc1Component(editor);
  faquc2Block(editor);
  faquc2Component(editor);
  faquc3Block(editor);
  faquc3Component(editor);
  beforeAfter1Block(editor);
  beforeAfter1Component(editor);
  beforeAfter2Block(editor);
  beforeAfter2Component(editor);
  beforeAfter3Block(editor);
  beforeAfter3Component(editor);
  beforeAfter4Block(editor);
  beforeAfter4Component(editor);
  clientListLogos1Block(editor);
  clientListLogos1Component(editor);
  clientListLogos2Block(editor);
  clientListLogos2Component(editor);
  clientListLogos3Block(editor);
  clientListLogos3Component(editor);
  clientListLogos4Block(editor);
  clientListLogos4Component(editor);
  reviewsAndRatings1Block(editor);
  reviewsAndRatings1Component(editor);
  reviewsAndRatings2Block(editor);
  reviewsAndRatings2Component(editor);
  reviewsAndRatings3Block(editor);
  reviewsAndRatings3Component(editor);
  reviewsAndRatings4Block(editor);
  reviewsAndRatings4Component(editor);
  testimonials1Block(editor);
  testimonials1Component(editor);
  testimonials2Block(editor);
  testimonials2Component(editor);
  testimonials3Block(editor);
  testimonials3Component(editor);
  testimonials4Block(editor);
  testimonials4Component(editor);
  endorsements1Block(editor);
  endorsements1Component(editor);
  endorsements2Block(editor);
  endorsements2Component(editor);
  endorsements3Block(editor);
  endorsements3Component(editor);
}
