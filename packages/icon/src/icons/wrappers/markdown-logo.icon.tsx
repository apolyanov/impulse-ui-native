import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MarkdownLogoBoldIcon } from "../bold/markdown-logo-bold.icon";
import { MarkdownLogoDuotoneIcon } from "../duotone/markdown-logo-duotone.icon";
import { MarkdownLogoFillIcon } from "../fill/markdown-logo-fill.icon";
import { MarkdownLogoLightIcon } from "../light/markdown-logo-light.icon";
import { MarkdownLogoRegularIcon } from "../regular/markdown-logo-regular.icon";
import { MarkdownLogoThinIcon } from "../thin/markdown-logo-thin.icon";

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
