import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { EjectSimpleBoldIcon } from "../bold/eject-simple-bold.icon";
import { EjectSimpleDuotoneIcon } from "../duotone/eject-simple-duotone.icon";
import { EjectSimpleFillIcon } from "../fill/eject-simple-fill.icon";
import { EjectSimpleLightIcon } from "../light/eject-simple-light.icon";
import { EjectSimpleRegularIcon } from "../regular/eject-simple-regular.icon";
import { EjectSimpleThinIcon } from "../thin/eject-simple-thin.icon";

export const EjectSimpleIcon = memo(function EjectSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: EjectSimpleBoldIcon,
      duotone: EjectSimpleDuotoneIcon,
      fill: EjectSimpleFillIcon,
      light: EjectSimpleLightIcon,
      regular: EjectSimpleRegularIcon,
      thin: EjectSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
