import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SquareLogoBoldIcon } from "../bold/square-logo-bold.icon";
import { SquareLogoDuotoneIcon } from "../duotone/square-logo-duotone.icon";
import { SquareLogoFillIcon } from "../fill/square-logo-fill.icon";
import { SquareLogoLightIcon } from "../light/square-logo-light.icon";
import { SquareLogoRegularIcon } from "../regular/square-logo-regular.icon";
import { SquareLogoThinIcon } from "../thin/square-logo-thin.icon";

export const SquareLogoIcon = memo(function SquareLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SquareLogoBoldIcon,
      duotone: SquareLogoDuotoneIcon,
      fill: SquareLogoFillIcon,
      light: SquareLogoLightIcon,
      regular: SquareLogoRegularIcon,
      thin: SquareLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
