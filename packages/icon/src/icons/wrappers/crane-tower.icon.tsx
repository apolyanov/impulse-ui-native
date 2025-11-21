import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CraneTowerBoldIcon } from "../bold";
import { CraneTowerDuotoneIcon } from "../duotone";
import { CraneTowerFillIcon } from "../fill";
import { CraneTowerLightIcon } from "../light";
import { CraneTowerRegularIcon } from "../regular";
import { CraneTowerThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CraneTowerIcon = memo(function CraneTower(
  props: IconWrapperProps
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
