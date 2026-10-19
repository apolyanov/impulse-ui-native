import { createIcon } from "../../hocs/create-icon.hoc";
import { CodeSimpleBoldIcon } from "../bold/code-simple-bold.icon";
import { CodeSimpleDuotoneIcon } from "../duotone/code-simple-duotone.icon";
import { CodeSimpleFillIcon } from "../fill/code-simple-fill.icon";
import { CodeSimpleLightIcon } from "../light/code-simple-light.icon";
import { CodeSimpleRegularIcon } from "../regular/code-simple-regular.icon";
import { CodeSimpleThinIcon } from "../thin/code-simple-thin.icon";

export const CodeSimpleIcon = createIcon("CodeSimple", {
  bold: CodeSimpleBoldIcon,
  duotone: CodeSimpleDuotoneIcon,
  fill: CodeSimpleFillIcon,
  light: CodeSimpleLightIcon,
  regular: CodeSimpleRegularIcon,
  thin: CodeSimpleThinIcon,
});
