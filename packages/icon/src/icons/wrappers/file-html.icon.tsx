import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FileHtmlBoldIcon } from "../bold/file-html-bold.icon";
import { FileHtmlDuotoneIcon } from "../duotone/file-html-duotone.icon";
import { FileHtmlFillIcon } from "../fill/file-html-fill.icon";
import { FileHtmlLightIcon } from "../light/file-html-light.icon";
import { FileHtmlRegularIcon } from "../regular/file-html-regular.icon";
import { FileHtmlThinIcon } from "../thin/file-html-thin.icon";

export const FileHtmlIcon = memo(function FileHtml(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileHtmlBoldIcon,
      duotone: FileHtmlDuotoneIcon,
      fill: FileHtmlFillIcon,
      light: FileHtmlLightIcon,
      regular: FileHtmlRegularIcon,
      thin: FileHtmlThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
