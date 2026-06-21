import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FediverseLogoBoldIcon } from "../bold";
import { FediverseLogoDuotoneIcon } from "../duotone";
import { FediverseLogoFillIcon } from "../fill";
import { FediverseLogoLightIcon } from "../light";
import { FediverseLogoRegularIcon } from "../regular";
import { FediverseLogoThinIcon } from "../thin";

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
