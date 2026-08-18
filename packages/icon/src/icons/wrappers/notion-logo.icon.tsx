import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NotionLogoBoldIcon } from "../bold/notion-logo-bold.icon";
import { NotionLogoDuotoneIcon } from "../duotone/notion-logo-duotone.icon";
import { NotionLogoFillIcon } from "../fill/notion-logo-fill.icon";
import { NotionLogoLightIcon } from "../light/notion-logo-light.icon";
import { NotionLogoRegularIcon } from "../regular/notion-logo-regular.icon";
import { NotionLogoThinIcon } from "../thin/notion-logo-thin.icon";

export const NotionLogoIcon = memo(function NotionLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NotionLogoBoldIcon,
      duotone: NotionLogoDuotoneIcon,
      fill: NotionLogoFillIcon,
      light: NotionLogoLightIcon,
      regular: NotionLogoRegularIcon,
      thin: NotionLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
