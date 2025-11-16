import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SubsetProperOfBold } from "../bold";
import { SubsetProperOfDuotone } from "../duotone";
import { SubsetProperOfFill } from "../fill";
import { SubsetProperOfLight } from "../light";
import { SubsetProperOfRegular } from "../regular";
import { SubsetProperOfThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SubsetProperOf = memo(function SubsetProperOf(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SubsetProperOfBold,
      duotone: SubsetProperOfDuotone,
      fill: SubsetProperOfFill,
      light: SubsetProperOfLight,
      regular: SubsetProperOfRegular,
      thin: SubsetProperOfThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
