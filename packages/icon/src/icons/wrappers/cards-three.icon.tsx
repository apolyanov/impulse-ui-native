import { createIcon } from "../../hocs/create-icon.hoc";
import { CardsThreeBoldIcon } from "../bold/cards-three-bold.icon";
import { CardsThreeDuotoneIcon } from "../duotone/cards-three-duotone.icon";
import { CardsThreeFillIcon } from "../fill/cards-three-fill.icon";
import { CardsThreeLightIcon } from "../light/cards-three-light.icon";
import { CardsThreeRegularIcon } from "../regular/cards-three-regular.icon";
import { CardsThreeThinIcon } from "../thin/cards-three-thin.icon";

export const CardsThreeIcon = createIcon("CardsThree", {
  bold: CardsThreeBoldIcon,
  duotone: CardsThreeDuotoneIcon,
  fill: CardsThreeFillIcon,
  light: CardsThreeLightIcon,
  regular: CardsThreeRegularIcon,
  thin: CardsThreeThinIcon,
});
