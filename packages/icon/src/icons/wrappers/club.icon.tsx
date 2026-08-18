import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ClubBoldIcon } from "../bold/club-bold.icon";
import { ClubDuotoneIcon } from "../duotone/club-duotone.icon";
import { ClubFillIcon } from "../fill/club-fill.icon";
import { ClubLightIcon } from "../light/club-light.icon";
import { ClubRegularIcon } from "../regular/club-regular.icon";
import { ClubThinIcon } from "../thin/club-thin.icon";

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
