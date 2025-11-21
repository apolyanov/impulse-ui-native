import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { StackOverflowLogoBoldIcon } from "../bold";
import { StackOverflowLogoDuotoneIcon } from "../duotone";
import { StackOverflowLogoFillIcon } from "../fill";
import { StackOverflowLogoLightIcon } from "../light";
import { StackOverflowLogoRegularIcon } from "../regular";
import { StackOverflowLogoThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const StackOverflowLogoIcon = memo(function StackOverflowLogo(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: StackOverflowLogoBoldIcon,
      duotone: StackOverflowLogoDuotoneIcon,
      fill: StackOverflowLogoFillIcon,
      light: StackOverflowLogoLightIcon,
      regular: StackOverflowLogoRegularIcon,
      thin: StackOverflowLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
