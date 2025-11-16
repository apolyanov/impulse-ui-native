import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FileHtmlBold } from "../bold";
import { FileHtmlDuotone } from "../duotone";
import { FileHtmlFill } from "../fill";
import { FileHtmlLight } from "../light";
import { FileHtmlRegular } from "../regular";
import { FileHtmlThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FileHtml = memo(function FileHtml(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileHtmlBold,
      duotone: FileHtmlDuotone,
      fill: FileHtmlFill,
      light: FileHtmlLight,
      regular: FileHtmlRegular,
      thin: FileHtmlThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
