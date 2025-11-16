import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TrophyBold } from "../bold";
import { TrophyDuotone } from "../duotone";
import { TrophyFill } from "../fill";
import { TrophyLight } from "../light";
import { TrophyRegular } from "../regular";
import { TrophyThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Trophy = memo(function Trophy(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TrophyBold,
      duotone: TrophyDuotone,
      fill: TrophyFill,
      light: TrophyLight,
      regular: TrophyRegular,
      thin: TrophyThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
