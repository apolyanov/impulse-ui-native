import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { EqualsBoldIcon } from "../bold";
import { EqualsDuotoneIcon } from "../duotone";
import { EqualsFillIcon } from "../fill";
import { EqualsLightIcon } from "../light";
import { EqualsRegularIcon } from "../regular";
import { EqualsThinIcon } from "../thin";

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
