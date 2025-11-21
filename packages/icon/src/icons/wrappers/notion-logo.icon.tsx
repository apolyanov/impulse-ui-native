import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NotionLogoBoldIcon } from "../bold";
import { NotionLogoDuotoneIcon } from "../duotone";
import { NotionLogoFillIcon } from "../fill";
import { NotionLogoLightIcon } from "../light";
import { NotionLogoRegularIcon } from "../regular";
import { NotionLogoThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NotionLogoIcon = memo(function NotionLogo(
  props: IconWrapperProps
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
