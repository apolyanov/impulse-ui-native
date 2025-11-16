import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SuitcaseSimpleBold } from "../bold";
import { SuitcaseSimpleDuotone } from "../duotone";
import { SuitcaseSimpleFill } from "../fill";
import { SuitcaseSimpleLight } from "../light";
import { SuitcaseSimpleRegular } from "../regular";
import { SuitcaseSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SuitcaseSimple = memo(function SuitcaseSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SuitcaseSimpleBold,
      duotone: SuitcaseSimpleDuotone,
      fill: SuitcaseSimpleFill,
      light: SuitcaseSimpleLight,
      regular: SuitcaseSimpleRegular,
      thin: SuitcaseSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
