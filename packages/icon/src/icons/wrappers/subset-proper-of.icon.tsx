import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SubsetProperOfBoldIcon } from "../bold/subset-proper-of-bold.icon";
import { SubsetProperOfDuotoneIcon } from "../duotone/subset-proper-of-duotone.icon";
import { SubsetProperOfFillIcon } from "../fill/subset-proper-of-fill.icon";
import { SubsetProperOfLightIcon } from "../light/subset-proper-of-light.icon";
import { SubsetProperOfRegularIcon } from "../regular/subset-proper-of-regular.icon";
import { SubsetProperOfThinIcon } from "../thin/subset-proper-of-thin.icon";

export const SubsetProperOfIcon = memo(function SubsetProperOf(
  props: IconWrapperProps,
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
