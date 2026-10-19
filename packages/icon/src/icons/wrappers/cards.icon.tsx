import { createIcon } from "../../hocs/create-icon.hoc";
import { CardsBoldIcon } from "../bold/cards-bold.icon";
import { CardsDuotoneIcon } from "../duotone/cards-duotone.icon";
import { CardsFillIcon } from "../fill/cards-fill.icon";
import { CardsLightIcon } from "../light/cards-light.icon";
import { CardsRegularIcon } from "../regular/cards-regular.icon";
import { CardsThinIcon } from "../thin/cards-thin.icon";

export const CardsIcon = createIcon("Cards", {
  bold: CardsBoldIcon,
  duotone: CardsDuotoneIcon,
  fill: CardsFillIcon,
  light: CardsLightIcon,
  regular: CardsRegularIcon,
  thin: CardsThinIcon,
});
