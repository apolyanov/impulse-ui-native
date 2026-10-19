import { createIcon } from "../../hocs/create-icon.hoc";
import { QuotesBoldIcon } from "../bold/quotes-bold.icon";
import { QuotesDuotoneIcon } from "../duotone/quotes-duotone.icon";
import { QuotesFillIcon } from "../fill/quotes-fill.icon";
import { QuotesLightIcon } from "../light/quotes-light.icon";
import { QuotesRegularIcon } from "../regular/quotes-regular.icon";
import { QuotesThinIcon } from "../thin/quotes-thin.icon";

export const QuotesIcon = createIcon("Quotes", {
  bold: QuotesBoldIcon,
  duotone: QuotesDuotoneIcon,
  fill: QuotesFillIcon,
  light: QuotesLightIcon,
  regular: QuotesRegularIcon,
  thin: QuotesThinIcon,
});
