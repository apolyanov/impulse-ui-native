import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MarkdownLogoBoldIcon } from "../bold";
import { MarkdownLogoDuotoneIcon } from "../duotone";
import { MarkdownLogoFillIcon } from "../fill";
import { MarkdownLogoLightIcon } from "../light";
import { MarkdownLogoRegularIcon } from "../regular";
import { MarkdownLogoThinIcon } from "../thin";

export const MarkdownLogoIcon = memo(function MarkdownLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MarkdownLogoBoldIcon,
      duotone: MarkdownLogoDuotoneIcon,
      fill: MarkdownLogoFillIcon,
      light: MarkdownLogoLightIcon,
      regular: MarkdownLogoRegularIcon,
      thin: MarkdownLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
