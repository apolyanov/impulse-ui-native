import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FediverseLogoBold } from "../bold";
import { FediverseLogoDuotone } from "../duotone";
import { FediverseLogoFill } from "../fill";
import { FediverseLogoLight } from "../light";
import { FediverseLogoRegular } from "../regular";
import { FediverseLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FediverseLogo = memo(function FediverseLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FediverseLogoBold,
      duotone: FediverseLogoDuotone,
      fill: FediverseLogoFill,
      light: FediverseLogoLight,
      regular: FediverseLogoRegular,
      thin: FediverseLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
