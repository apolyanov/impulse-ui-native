import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SuitcaseSimpleBoldIcon } from "../bold";
import { SuitcaseSimpleDuotoneIcon } from "../duotone";
import { SuitcaseSimpleFillIcon } from "../fill";
import { SuitcaseSimpleLightIcon } from "../light";
import { SuitcaseSimpleRegularIcon } from "../regular";
import { SuitcaseSimpleThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SuitcaseSimpleIcon = memo(function SuitcaseSimple(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SuitcaseSimpleBoldIcon,
      duotone: SuitcaseSimpleDuotoneIcon,
      fill: SuitcaseSimpleFillIcon,
      light: SuitcaseSimpleLightIcon,
      regular: SuitcaseSimpleRegularIcon,
      thin: SuitcaseSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
