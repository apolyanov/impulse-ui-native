import { createIcon } from "../../hocs/create-icon.hoc";
import { TextOutdentBoldIcon } from "../bold/text-outdent-bold.icon";
import { TextOutdentDuotoneIcon } from "../duotone/text-outdent-duotone.icon";
import { TextOutdentFillIcon } from "../fill/text-outdent-fill.icon";
import { TextOutdentLightIcon } from "../light/text-outdent-light.icon";
import { TextOutdentRegularIcon } from "../regular/text-outdent-regular.icon";
import { TextOutdentThinIcon } from "../thin/text-outdent-thin.icon";

export const TextOutdentIcon = createIcon("TextOutdent", {
  bold: TextOutdentBoldIcon,
  duotone: TextOutdentDuotoneIcon,
  fill: TextOutdentFillIcon,
  light: TextOutdentLightIcon,
  regular: TextOutdentRegularIcon,
  thin: TextOutdentThinIcon,
});
