import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { StackOverflowLogoBoldIcon } from "../bold/stack-overflow-logo-bold.icon";
import { StackOverflowLogoDuotoneIcon } from "../duotone/stack-overflow-logo-duotone.icon";
import { StackOverflowLogoFillIcon } from "../fill/stack-overflow-logo-fill.icon";
import { StackOverflowLogoLightIcon } from "../light/stack-overflow-logo-light.icon";
import { StackOverflowLogoRegularIcon } from "../regular/stack-overflow-logo-regular.icon";
import { StackOverflowLogoThinIcon } from "../thin/stack-overflow-logo-thin.icon";

export const StackOverflowLogoIcon = memo(function StackOverflowLogo(
  props: IconWrapperProps,
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
