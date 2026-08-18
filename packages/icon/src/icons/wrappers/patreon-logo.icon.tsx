import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PatreonLogoBoldIcon } from "../bold/patreon-logo-bold.icon";
import { PatreonLogoDuotoneIcon } from "../duotone/patreon-logo-duotone.icon";
import { PatreonLogoFillIcon } from "../fill/patreon-logo-fill.icon";
import { PatreonLogoLightIcon } from "../light/patreon-logo-light.icon";
import { PatreonLogoRegularIcon } from "../regular/patreon-logo-regular.icon";
import { PatreonLogoThinIcon } from "../thin/patreon-logo-thin.icon";

export const PatreonLogoIcon = memo(function PatreonLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PatreonLogoBoldIcon,
      duotone: PatreonLogoDuotoneIcon,
      fill: PatreonLogoFillIcon,
      light: PatreonLogoLightIcon,
      regular: PatreonLogoRegularIcon,
      thin: PatreonLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
