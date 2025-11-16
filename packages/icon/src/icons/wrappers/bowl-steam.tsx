import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BowlSteamBold } from "../bold";
import { BowlSteamDuotone } from "../duotone";
import { BowlSteamFill } from "../fill";
import { BowlSteamLight } from "../light";
import { BowlSteamRegular } from "../regular";
import { BowlSteamThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BowlSteam = memo(function BowlSteam(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BowlSteamBold,
      duotone: BowlSteamDuotone,
      fill: BowlSteamFill,
      light: BowlSteamLight,
      regular: BowlSteamRegular,
      thin: BowlSteamThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
