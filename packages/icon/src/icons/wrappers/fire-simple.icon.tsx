import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FireSimpleBoldIcon } from "../bold/fire-simple-bold.icon";
import { FireSimpleDuotoneIcon } from "../duotone/fire-simple-duotone.icon";
import { FireSimpleFillIcon } from "../fill/fire-simple-fill.icon";
import { FireSimpleLightIcon } from "../light/fire-simple-light.icon";
import { FireSimpleRegularIcon } from "../regular/fire-simple-regular.icon";
import { FireSimpleThinIcon } from "../thin/fire-simple-thin.icon";

export const FireSimpleIcon = memo(function FireSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FireSimpleBoldIcon,
      duotone: FireSimpleDuotoneIcon,
      fill: FireSimpleFillIcon,
      light: FireSimpleLightIcon,
      regular: FireSimpleRegularIcon,
      thin: FireSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
