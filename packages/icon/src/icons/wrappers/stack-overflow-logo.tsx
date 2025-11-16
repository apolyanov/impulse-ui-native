import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { StackOverflowLogoBold } from "../bold";
import { StackOverflowLogoDuotone } from "../duotone";
import { StackOverflowLogoFill } from "../fill";
import { StackOverflowLogoLight } from "../light";
import { StackOverflowLogoRegular } from "../regular";
import { StackOverflowLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const StackOverflowLogo = memo(function StackOverflowLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: StackOverflowLogoBold,
      duotone: StackOverflowLogoDuotone,
      fill: StackOverflowLogoFill,
      light: StackOverflowLogoLight,
      regular: StackOverflowLogoRegular,
      thin: StackOverflowLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
