import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BellSimpleBoldIcon } from "../bold/bell-simple-bold.icon";
import { BellSimpleDuotoneIcon } from "../duotone/bell-simple-duotone.icon";
import { BellSimpleFillIcon } from "../fill/bell-simple-fill.icon";
import { BellSimpleLightIcon } from "../light/bell-simple-light.icon";
import { BellSimpleRegularIcon } from "../regular/bell-simple-regular.icon";
import { BellSimpleThinIcon } from "../thin/bell-simple-thin.icon";

export const BellSimpleIcon = memo(function BellSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BellSimpleBoldIcon,
      duotone: BellSimpleDuotoneIcon,
      fill: BellSimpleFillIcon,
      light: BellSimpleLightIcon,
      regular: BellSimpleRegularIcon,
      thin: BellSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
