import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PhosphorLogoBoldIcon } from "../bold/phosphor-logo-bold.icon";
import { PhosphorLogoDuotoneIcon } from "../duotone/phosphor-logo-duotone.icon";
import { PhosphorLogoFillIcon } from "../fill/phosphor-logo-fill.icon";
import { PhosphorLogoLightIcon } from "../light/phosphor-logo-light.icon";
import { PhosphorLogoRegularIcon } from "../regular/phosphor-logo-regular.icon";
import { PhosphorLogoThinIcon } from "../thin/phosphor-logo-thin.icon";

export const PhosphorLogoIcon = memo(function PhosphorLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PhosphorLogoBoldIcon,
      duotone: PhosphorLogoDuotoneIcon,
      fill: PhosphorLogoFillIcon,
      light: PhosphorLogoLightIcon,
      regular: PhosphorLogoRegularIcon,
      thin: PhosphorLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
