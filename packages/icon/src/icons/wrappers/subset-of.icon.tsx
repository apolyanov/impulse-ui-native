import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SubsetOfBoldIcon } from "../bold";
import { SubsetOfDuotoneIcon } from "../duotone";
import { SubsetOfFillIcon } from "../fill";
import { SubsetOfLightIcon } from "../light";
import { SubsetOfRegularIcon } from "../regular";
import { SubsetOfThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
