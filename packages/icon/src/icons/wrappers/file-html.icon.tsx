import { createIcon } from "../../hocs/create-icon.hoc";
import { FileHtmlBoldIcon } from "../bold/file-html-bold.icon";
import { FileHtmlDuotoneIcon } from "../duotone/file-html-duotone.icon";
import { FileHtmlFillIcon } from "../fill/file-html-fill.icon";
import { FileHtmlLightIcon } from "../light/file-html-light.icon";
import { FileHtmlRegularIcon } from "../regular/file-html-regular.icon";
import { FileHtmlThinIcon } from "../thin/file-html-thin.icon";

export const FileHtmlIcon = createIcon("FileHtml", {
  bold: FileHtmlBoldIcon,
  duotone: FileHtmlDuotoneIcon,
  fill: FileHtmlFillIcon,
  light: FileHtmlLightIcon,
  regular: FileHtmlRegularIcon,
  thin: FileHtmlThinIcon,
});
