import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { AnchorSimpleBoldIcon } from "../bold/anchor-simple-bold.icon";
import { AnchorSimpleDuotoneIcon } from "../duotone/anchor-simple-duotone.icon";
import { AnchorSimpleFillIcon } from "../fill/anchor-simple-fill.icon";
import { AnchorSimpleLightIcon } from "../light/anchor-simple-light.icon";
import { AnchorSimpleRegularIcon } from "../regular/anchor-simple-regular.icon";
import { AnchorSimpleThinIcon } from "../thin/anchor-simple-thin.icon";

export const AnchorSimpleIcon = memo(function AnchorSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AnchorSimpleBoldIcon,
      duotone: AnchorSimpleDuotoneIcon,
      fill: AnchorSimpleFillIcon,
      light: AnchorSimpleLightIcon,
      regular: AnchorSimpleRegularIcon,
      thin: AnchorSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
