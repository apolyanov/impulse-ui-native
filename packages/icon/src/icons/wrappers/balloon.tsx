import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BalloonBold } from "../bold";
import { BalloonDuotone } from "../duotone";
import { BalloonFill } from "../fill";
import { BalloonLight } from "../light";
import { BalloonRegular } from "../regular";
import { BalloonThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Balloon = memo(function Balloon(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BalloonBold,
      duotone: BalloonDuotone,
      fill: BalloonFill,
      light: BalloonLight,
      regular: BalloonRegular,
      thin: BalloonThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
