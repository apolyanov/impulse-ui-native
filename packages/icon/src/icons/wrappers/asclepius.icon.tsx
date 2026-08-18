import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { AsclepiusBoldIcon } from "../bold/asclepius-bold.icon";
import { AsclepiusDuotoneIcon } from "../duotone/asclepius-duotone.icon";
import { AsclepiusFillIcon } from "../fill/asclepius-fill.icon";
import { AsclepiusLightIcon } from "../light/asclepius-light.icon";
import { AsclepiusRegularIcon } from "../regular/asclepius-regular.icon";
import { AsclepiusThinIcon } from "../thin/asclepius-thin.icon";

export const AsclepiusIcon = memo(function Asclepius(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AsclepiusBoldIcon,
      duotone: AsclepiusDuotoneIcon,
      fill: AsclepiusFillIcon,
      light: AsclepiusLightIcon,
      regular: AsclepiusRegularIcon,
      thin: AsclepiusThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
