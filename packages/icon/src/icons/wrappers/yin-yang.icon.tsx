import { createIcon } from "../../hocs/create-icon.hoc";
import { YinYangBoldIcon } from "../bold/yin-yang-bold.icon";
import { YinYangDuotoneIcon } from "../duotone/yin-yang-duotone.icon";
import { YinYangFillIcon } from "../fill/yin-yang-fill.icon";
import { YinYangLightIcon } from "../light/yin-yang-light.icon";
import { YinYangRegularIcon } from "../regular/yin-yang-regular.icon";
import { YinYangThinIcon } from "../thin/yin-yang-thin.icon";

export const YinYangIcon = createIcon("YinYang", {
  bold: YinYangBoldIcon,
  duotone: YinYangDuotoneIcon,
  fill: YinYangFillIcon,
  light: YinYangLightIcon,
  regular: YinYangRegularIcon,
  thin: YinYangThinIcon,
});
