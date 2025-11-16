import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MarkdownLogoBold } from "../bold";
import { MarkdownLogoDuotone } from "../duotone";
import { MarkdownLogoFill } from "../fill";
import { MarkdownLogoLight } from "../light";
import { MarkdownLogoRegular } from "../regular";
import { MarkdownLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MarkdownLogo = memo(function MarkdownLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MarkdownLogoBold,
      duotone: MarkdownLogoDuotone,
      fill: MarkdownLogoFill,
      light: MarkdownLogoLight,
      regular: MarkdownLogoRegular,
      thin: MarkdownLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
