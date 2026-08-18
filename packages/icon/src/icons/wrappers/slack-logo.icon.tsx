import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SlackLogoBoldIcon } from "../bold/slack-logo-bold.icon";
import { SlackLogoDuotoneIcon } from "../duotone/slack-logo-duotone.icon";
import { SlackLogoFillIcon } from "../fill/slack-logo-fill.icon";
import { SlackLogoLightIcon } from "../light/slack-logo-light.icon";
import { SlackLogoRegularIcon } from "../regular/slack-logo-regular.icon";
import { SlackLogoThinIcon } from "../thin/slack-logo-thin.icon";

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
