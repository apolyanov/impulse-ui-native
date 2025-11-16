import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ClubBold } from "../bold";
import { ClubDuotone } from "../duotone";
import { ClubFill } from "../fill";
import { ClubLight } from "../light";
import { ClubRegular } from "../regular";
import { ClubThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Club = memo(function Club(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ClubBold,
      duotone: ClubDuotone,
      fill: ClubFill,
      light: ClubLight,
      regular: ClubRegular,
      thin: ClubThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
