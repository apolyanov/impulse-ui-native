import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FirstAidKitBold } from "../bold";
import { FirstAidKitDuotone } from "../duotone";
import { FirstAidKitFill } from "../fill";
import { FirstAidKitLight } from "../light";
import { FirstAidKitRegular } from "../regular";
import { FirstAidKitThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FirstAidKit = memo(function FirstAidKit(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FirstAidKitBold,
      duotone: FirstAidKitDuotone,
      fill: FirstAidKitFill,
      light: FirstAidKitLight,
      regular: FirstAidKitRegular,
      thin: FirstAidKitThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
