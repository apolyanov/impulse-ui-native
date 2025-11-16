import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CraneTowerBold } from "../bold";
import { CraneTowerDuotone } from "../duotone";
import { CraneTowerFill } from "../fill";
import { CraneTowerLight } from "../light";
import { CraneTowerRegular } from "../regular";
import { CraneTowerThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CraneTower = memo(function CraneTower(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CraneTowerBold,
      duotone: CraneTowerDuotone,
      fill: CraneTowerFill,
      light: CraneTowerLight,
      regular: CraneTowerRegular,
      thin: CraneTowerThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
