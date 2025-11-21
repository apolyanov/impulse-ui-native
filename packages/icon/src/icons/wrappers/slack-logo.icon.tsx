import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SlackLogoBoldIcon } from "../bold";
import { SlackLogoDuotoneIcon } from "../duotone";
import { SlackLogoFillIcon } from "../fill";
import { SlackLogoLightIcon } from "../light";
import { SlackLogoRegularIcon } from "../regular";
import { SlackLogoThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SlackLogoIcon = memo(function SlackLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SlackLogoBoldIcon,
      duotone: SlackLogoDuotoneIcon,
      fill: SlackLogoFillIcon,
      light: SlackLogoLightIcon,
      regular: SlackLogoRegularIcon,
      thin: SlackLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
