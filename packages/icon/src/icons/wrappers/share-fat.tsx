import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ShareFatBold } from "../bold";
import { ShareFatDuotone } from "../duotone";
import { ShareFatFill } from "../fill";
import { ShareFatLight } from "../light";
import { ShareFatRegular } from "../regular";
import { ShareFatThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ShareFat = memo(function ShareFat(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ShareFatBold,
      duotone: ShareFatDuotone,
      fill: ShareFatFill,
      light: ShareFatLight,
      regular: ShareFatRegular,
      thin: ShareFatThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
