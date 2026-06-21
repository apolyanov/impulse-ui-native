import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BalloonBoldIcon } from "../bold";
import { BalloonDuotoneIcon } from "../duotone";
import { BalloonFillIcon } from "../fill";
import { BalloonLightIcon } from "../light";
import { BalloonRegularIcon } from "../regular";
import { BalloonThinIcon } from "../thin";

export const BalloonIcon = memo(function Balloon(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BalloonBoldIcon,
      duotone: BalloonDuotoneIcon,
      fill: BalloonFillIcon,
      light: BalloonLightIcon,
      regular: BalloonRegularIcon,
      thin: BalloonThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
