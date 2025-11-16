import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CrossBold } from "../bold";
import { CrossDuotone } from "../duotone";
import { CrossFill } from "../fill";
import { CrossLight } from "../light";
import { CrossRegular } from "../regular";
import { CrossThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Cross = memo(function Cross(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CrossBold,
      duotone: CrossDuotone,
      fill: CrossFill,
      light: CrossLight,
      regular: CrossRegular,
      thin: CrossThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
