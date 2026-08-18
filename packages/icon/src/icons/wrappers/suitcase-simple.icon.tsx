import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SuitcaseSimpleBoldIcon } from "../bold/suitcase-simple-bold.icon";
import { SuitcaseSimpleDuotoneIcon } from "../duotone/suitcase-simple-duotone.icon";
import { SuitcaseSimpleFillIcon } from "../fill/suitcase-simple-fill.icon";
import { SuitcaseSimpleLightIcon } from "../light/suitcase-simple-light.icon";
import { SuitcaseSimpleRegularIcon } from "../regular/suitcase-simple-regular.icon";
import { SuitcaseSimpleThinIcon } from "../thin/suitcase-simple-thin.icon";

export const SuitcaseSimpleIcon = memo(function SuitcaseSimple(
  props: IconWrapperProps,
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
