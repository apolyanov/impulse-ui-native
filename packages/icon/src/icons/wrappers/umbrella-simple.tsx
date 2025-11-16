import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { UmbrellaSimpleBold } from "../bold";
import { UmbrellaSimpleDuotone } from "../duotone";
import { UmbrellaSimpleFill } from "../fill";
import { UmbrellaSimpleLight } from "../light";
import { UmbrellaSimpleRegular } from "../regular";
import { UmbrellaSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const UmbrellaSimple = memo(function UmbrellaSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UmbrellaSimpleBold,
      duotone: UmbrellaSimpleDuotone,
      fill: UmbrellaSimpleFill,
      light: UmbrellaSimpleLight,
      regular: UmbrellaSimpleRegular,
      thin: UmbrellaSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
