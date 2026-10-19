import { createIcon } from "../../hocs/create-icon.hoc";
import { CodeBoldIcon } from "../bold/code-bold.icon";
import { CodeDuotoneIcon } from "../duotone/code-duotone.icon";
import { CodeFillIcon } from "../fill/code-fill.icon";
import { CodeLightIcon } from "../light/code-light.icon";
import { CodeRegularIcon } from "../regular/code-regular.icon";
import { CodeThinIcon } from "../thin/code-thin.icon";

export const CodeIcon = createIcon("Code", {
  bold: CodeBoldIcon,
  duotone: CodeDuotoneIcon,
  fill: CodeFillIcon,
  light: CodeLightIcon,
  regular: CodeRegularIcon,
  thin: CodeThinIcon,
});
