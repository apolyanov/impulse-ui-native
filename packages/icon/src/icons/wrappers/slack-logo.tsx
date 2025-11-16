import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SlackLogoBold } from "../bold";
import { SlackLogoDuotone } from "../duotone";
import { SlackLogoFill } from "../fill";
import { SlackLogoLight } from "../light";
import { SlackLogoRegular } from "../regular";
import { SlackLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SlackLogo = memo(function SlackLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SlackLogoBold,
      duotone: SlackLogoDuotone,
      fill: SlackLogoFill,
      light: SlackLogoLight,
      regular: SlackLogoRegular,
      thin: SlackLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
