import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FediverseLogoBoldIcon } from "../bold/fediverse-logo-bold.icon";
import { FediverseLogoDuotoneIcon } from "../duotone/fediverse-logo-duotone.icon";
import { FediverseLogoFillIcon } from "../fill/fediverse-logo-fill.icon";
import { FediverseLogoLightIcon } from "../light/fediverse-logo-light.icon";
import { FediverseLogoRegularIcon } from "../regular/fediverse-logo-regular.icon";
import { FediverseLogoThinIcon } from "../thin/fediverse-logo-thin.icon";

export const FediverseLogoIcon = memo(function FediverseLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FediverseLogoBoldIcon,
      duotone: FediverseLogoDuotoneIcon,
      fill: FediverseLogoFillIcon,
      light: FediverseLogoLightIcon,
      regular: FediverseLogoRegularIcon,
      thin: FediverseLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
