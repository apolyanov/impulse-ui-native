import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LinkedinLogoBold } from "../bold";
import { LinkedinLogoDuotone } from "../duotone";
import { LinkedinLogoFill } from "../fill";
import { LinkedinLogoLight } from "../light";
import { LinkedinLogoRegular } from "../regular";
import { LinkedinLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const LinkedinLogo = memo(function LinkedinLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LinkedinLogoBold,
      duotone: LinkedinLogoDuotone,
      fill: LinkedinLogoFill,
      light: LinkedinLogoLight,
      regular: LinkedinLogoRegular,
      thin: LinkedinLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
