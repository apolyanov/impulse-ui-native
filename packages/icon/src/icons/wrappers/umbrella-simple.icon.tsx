import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { UmbrellaSimpleBoldIcon } from "../bold/umbrella-simple-bold.icon";
import { UmbrellaSimpleDuotoneIcon } from "../duotone/umbrella-simple-duotone.icon";
import { UmbrellaSimpleFillIcon } from "../fill/umbrella-simple-fill.icon";
import { UmbrellaSimpleLightIcon } from "../light/umbrella-simple-light.icon";
import { UmbrellaSimpleRegularIcon } from "../regular/umbrella-simple-regular.icon";
import { UmbrellaSimpleThinIcon } from "../thin/umbrella-simple-thin.icon";

export const UmbrellaSimpleIcon = memo(function UmbrellaSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UmbrellaSimpleBoldIcon,
      duotone: UmbrellaSimpleDuotoneIcon,
      fill: UmbrellaSimpleFillIcon,
      light: UmbrellaSimpleLightIcon,
      regular: UmbrellaSimpleRegularIcon,
      thin: UmbrellaSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
