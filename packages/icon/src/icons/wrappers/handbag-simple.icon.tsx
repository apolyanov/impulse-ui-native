import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HandbagSimpleBoldIcon } from "../bold/handbag-simple-bold.icon";
import { HandbagSimpleDuotoneIcon } from "../duotone/handbag-simple-duotone.icon";
import { HandbagSimpleFillIcon } from "../fill/handbag-simple-fill.icon";
import { HandbagSimpleLightIcon } from "../light/handbag-simple-light.icon";
import { HandbagSimpleRegularIcon } from "../regular/handbag-simple-regular.icon";
import { HandbagSimpleThinIcon } from "../thin/handbag-simple-thin.icon";

export const HandbagSimpleIcon = memo(function HandbagSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HandbagSimpleBoldIcon,
      duotone: HandbagSimpleDuotoneIcon,
      fill: HandbagSimpleFillIcon,
      light: HandbagSimpleLightIcon,
      regular: HandbagSimpleRegularIcon,
      thin: HandbagSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
