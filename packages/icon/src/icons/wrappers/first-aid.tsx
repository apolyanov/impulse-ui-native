import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FirstAidBold } from "../bold";
import { FirstAidDuotone } from "../duotone";
import { FirstAidFill } from "../fill";
import { FirstAidLight } from "../light";
import { FirstAidRegular } from "../regular";
import { FirstAidThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FirstAid = memo(function FirstAid(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FirstAidBold,
      duotone: FirstAidDuotone,
      fill: FirstAidFill,
      light: FirstAidLight,
      regular: FirstAidRegular,
      thin: FirstAidThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
