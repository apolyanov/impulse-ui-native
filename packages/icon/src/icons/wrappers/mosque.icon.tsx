import { createIcon } from "../../hocs/create-icon.hoc";
import { MosqueBoldIcon } from "../bold/mosque-bold.icon";
import { MosqueDuotoneIcon } from "../duotone/mosque-duotone.icon";
import { MosqueFillIcon } from "../fill/mosque-fill.icon";
import { MosqueLightIcon } from "../light/mosque-light.icon";
import { MosqueRegularIcon } from "../regular/mosque-regular.icon";
import { MosqueThinIcon } from "../thin/mosque-thin.icon";

export const MosqueIcon = createIcon("Mosque", {
  bold: MosqueBoldIcon,
  duotone: MosqueDuotoneIcon,
  fill: MosqueFillIcon,
  light: MosqueLightIcon,
  regular: MosqueRegularIcon,
  thin: MosqueThinIcon,
});
