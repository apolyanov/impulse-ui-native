import { createIcon } from "../../hocs/create-icon.hoc";
import { CodeBlockBoldIcon } from "../bold/code-block-bold.icon";
import { CodeBlockDuotoneIcon } from "../duotone/code-block-duotone.icon";
import { CodeBlockFillIcon } from "../fill/code-block-fill.icon";
import { CodeBlockLightIcon } from "../light/code-block-light.icon";
import { CodeBlockRegularIcon } from "../regular/code-block-regular.icon";
import { CodeBlockThinIcon } from "../thin/code-block-thin.icon";

export const CodeBlockIcon = createIcon("CodeBlock", {
  bold: CodeBlockBoldIcon,
  duotone: CodeBlockDuotoneIcon,
  fill: CodeBlockFillIcon,
  light: CodeBlockLightIcon,
  regular: CodeBlockRegularIcon,
  thin: CodeBlockThinIcon,
});
