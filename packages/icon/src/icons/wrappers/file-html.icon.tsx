import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FileHtmlBoldIcon } from "../bold";
import { FileHtmlDuotoneIcon } from "../duotone";
import { FileHtmlFillIcon } from "../fill";
import { FileHtmlLightIcon } from "../light";
import { FileHtmlRegularIcon } from "../regular";
import { FileHtmlThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
