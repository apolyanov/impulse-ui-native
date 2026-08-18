import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ShieldPlusBoldIcon } from "../bold/shield-plus-bold.icon";
import { ShieldPlusDuotoneIcon } from "../duotone/shield-plus-duotone.icon";
import { ShieldPlusFillIcon } from "../fill/shield-plus-fill.icon";
import { ShieldPlusLightIcon } from "../light/shield-plus-light.icon";
import { ShieldPlusRegularIcon } from "../regular/shield-plus-regular.icon";
import { ShieldPlusThinIcon } from "../thin/shield-plus-thin.icon";

export const ShieldPlusIcon = memo(function ShieldPlus(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ShieldPlusBoldIcon,
      duotone: ShieldPlusDuotoneIcon,
      fill: ShieldPlusFillIcon,
      light: ShieldPlusLightIcon,
      regular: ShieldPlusRegularIcon,
      thin: ShieldPlusThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
