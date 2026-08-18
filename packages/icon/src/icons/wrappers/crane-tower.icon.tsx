import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CraneTowerBoldIcon } from "../bold/crane-tower-bold.icon";
import { CraneTowerDuotoneIcon } from "../duotone/crane-tower-duotone.icon";
import { CraneTowerFillIcon } from "../fill/crane-tower-fill.icon";
import { CraneTowerLightIcon } from "../light/crane-tower-light.icon";
import { CraneTowerRegularIcon } from "../regular/crane-tower-regular.icon";
import { CraneTowerThinIcon } from "../thin/crane-tower-thin.icon";

export const CraneTowerIcon = memo(function CraneTower(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CraneTowerBoldIcon,
      duotone: CraneTowerDuotoneIcon,
      fill: CraneTowerFillIcon,
      light: CraneTowerLightIcon,
      regular: CraneTowerRegularIcon,
      thin: CraneTowerThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
