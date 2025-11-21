import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SubsetProperOfBoldIcon } from "../bold";
import { SubsetProperOfDuotoneIcon } from "../duotone";
import { SubsetProperOfFillIcon } from "../fill";
import { SubsetProperOfLightIcon } from "../light";
import { SubsetProperOfRegularIcon } from "../regular";
import { SubsetProperOfThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SubsetProperOfIcon = memo(function SubsetProperOf(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SubsetProperOfBoldIcon,
      duotone: SubsetProperOfDuotoneIcon,
      fill: SubsetProperOfFillIcon,
      light: SubsetProperOfLightIcon,
      regular: SubsetProperOfRegularIcon,
      thin: SubsetProperOfThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
