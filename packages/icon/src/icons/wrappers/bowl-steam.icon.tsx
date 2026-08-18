import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BowlSteamBoldIcon } from "../bold/bowl-steam-bold.icon";
import { BowlSteamDuotoneIcon } from "../duotone/bowl-steam-duotone.icon";
import { BowlSteamFillIcon } from "../fill/bowl-steam-fill.icon";
import { BowlSteamLightIcon } from "../light/bowl-steam-light.icon";
import { BowlSteamRegularIcon } from "../regular/bowl-steam-regular.icon";
import { BowlSteamThinIcon } from "../thin/bowl-steam-thin.icon";

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
