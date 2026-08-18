import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FishSimpleBoldIcon } from "../bold/fish-simple-bold.icon";
import { FishSimpleDuotoneIcon } from "../duotone/fish-simple-duotone.icon";
import { FishSimpleFillIcon } from "../fill/fish-simple-fill.icon";
import { FishSimpleLightIcon } from "../light/fish-simple-light.icon";
import { FishSimpleRegularIcon } from "../regular/fish-simple-regular.icon";
import { FishSimpleThinIcon } from "../thin/fish-simple-thin.icon";

export const FishSimpleIcon = memo(function FishSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FishSimpleBoldIcon,
      duotone: FishSimpleDuotoneIcon,
      fill: FishSimpleFillIcon,
      light: FishSimpleLightIcon,
      regular: FishSimpleRegularIcon,
      thin: FishSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
