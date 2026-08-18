import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GlobeSimpleBoldIcon } from "../bold/globe-simple-bold.icon";
import { GlobeSimpleDuotoneIcon } from "../duotone/globe-simple-duotone.icon";
import { GlobeSimpleFillIcon } from "../fill/globe-simple-fill.icon";
import { GlobeSimpleLightIcon } from "../light/globe-simple-light.icon";
import { GlobeSimpleRegularIcon } from "../regular/globe-simple-regular.icon";
import { GlobeSimpleThinIcon } from "../thin/globe-simple-thin.icon";

export const GlobeSimpleIcon = memo(function GlobeSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GlobeSimpleBoldIcon,
      duotone: GlobeSimpleDuotoneIcon,
      fill: GlobeSimpleFillIcon,
      light: GlobeSimpleLightIcon,
      regular: GlobeSimpleRegularIcon,
      thin: GlobeSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
