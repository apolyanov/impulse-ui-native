import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SubsetOfBoldIcon } from "../bold/subset-of-bold.icon";
import { SubsetOfDuotoneIcon } from "../duotone/subset-of-duotone.icon";
import { SubsetOfFillIcon } from "../fill/subset-of-fill.icon";
import { SubsetOfLightIcon } from "../light/subset-of-light.icon";
import { SubsetOfRegularIcon } from "../regular/subset-of-regular.icon";
import { SubsetOfThinIcon } from "../thin/subset-of-thin.icon";

export const SubsetOfIcon = memo(function SubsetOf(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SubsetOfBoldIcon,
      duotone: SubsetOfDuotoneIcon,
      fill: SubsetOfFillIcon,
      light: SubsetOfLightIcon,
      regular: SubsetOfRegularIcon,
      thin: SubsetOfThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
