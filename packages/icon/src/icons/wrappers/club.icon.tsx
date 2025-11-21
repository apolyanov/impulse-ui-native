import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ClubBoldIcon } from "../bold";
import { ClubDuotoneIcon } from "../duotone";
import { ClubFillIcon } from "../fill";
import { ClubLightIcon } from "../light";
import { ClubRegularIcon } from "../regular";
import { ClubThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ClubIcon = memo(function Club(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ClubBoldIcon,
      duotone: ClubDuotoneIcon,
      fill: ClubFillIcon,
      light: ClubLightIcon,
      regular: ClubRegularIcon,
      thin: ClubThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
