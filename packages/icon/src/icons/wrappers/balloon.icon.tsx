import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BalloonBoldIcon } from "../bold/balloon-bold.icon";
import { BalloonDuotoneIcon } from "../duotone/balloon-duotone.icon";
import { BalloonFillIcon } from "../fill/balloon-fill.icon";
import { BalloonLightIcon } from "../light/balloon-light.icon";
import { BalloonRegularIcon } from "../regular/balloon-regular.icon";
import { BalloonThinIcon } from "../thin/balloon-thin.icon";

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
