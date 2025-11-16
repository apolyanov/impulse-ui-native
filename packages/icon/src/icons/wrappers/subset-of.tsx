import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SubsetOfBold } from "../bold";
import { SubsetOfDuotone } from "../duotone";
import { SubsetOfFill } from "../fill";
import { SubsetOfLight } from "../light";
import { SubsetOfRegular } from "../regular";
import { SubsetOfThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SubsetOf = memo(function SubsetOf(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SubsetOfBold,
      duotone: SubsetOfDuotone,
      fill: SubsetOfFill,
      light: SubsetOfLight,
      regular: SubsetOfRegular,
      thin: SubsetOfThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
