import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BowlSteamBoldIcon } from "../bold";
import { BowlSteamDuotoneIcon } from "../duotone";
import { BowlSteamFillIcon } from "../fill";
import { BowlSteamLightIcon } from "../light";
import { BowlSteamRegularIcon } from "../regular";
import { BowlSteamThinIcon } from "../thin";

export const BowlSteamIcon = memo(function BowlSteam(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BowlSteamBoldIcon,
      duotone: BowlSteamDuotoneIcon,
      fill: BowlSteamFillIcon,
      light: BowlSteamLightIcon,
      regular: BowlSteamRegularIcon,
      thin: BowlSteamThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
