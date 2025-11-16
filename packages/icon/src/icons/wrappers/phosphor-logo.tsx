import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PhosphorLogoBold } from "../bold";
import { PhosphorLogoDuotone } from "../duotone";
import { PhosphorLogoFill } from "../fill";
import { PhosphorLogoLight } from "../light";
import { PhosphorLogoRegular } from "../regular";
import { PhosphorLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PhosphorLogo = memo(function PhosphorLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PhosphorLogoBold,
      duotone: PhosphorLogoDuotone,
      fill: PhosphorLogoFill,
      light: PhosphorLogoLight,
      regular: PhosphorLogoRegular,
      thin: PhosphorLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
