import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { EqualsBoldIcon } from "../bold/equals-bold.icon";
import { EqualsDuotoneIcon } from "../duotone/equals-duotone.icon";
import { EqualsFillIcon } from "../fill/equals-fill.icon";
import { EqualsLightIcon } from "../light/equals-light.icon";
import { EqualsRegularIcon } from "../regular/equals-regular.icon";
import { EqualsThinIcon } from "../thin/equals-thin.icon";

export const EqualsIcon = memo(function Equals(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: EqualsBoldIcon,
      duotone: EqualsDuotoneIcon,
      fill: EqualsFillIcon,
      light: EqualsLightIcon,
      regular: EqualsRegularIcon,
      thin: EqualsThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
