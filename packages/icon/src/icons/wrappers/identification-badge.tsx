import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IdentificationBadgeBold } from "../bold";
import { IdentificationBadgeDuotone } from "../duotone";
import { IdentificationBadgeFill } from "../fill";
import { IdentificationBadgeLight } from "../light";
import { IdentificationBadgeRegular } from "../regular";
import { IdentificationBadgeThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const IdentificationBadge = memo(function IdentificationBadge(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: IdentificationBadgeBold,
      duotone: IdentificationBadgeDuotone,
      fill: IdentificationBadgeFill,
      light: IdentificationBadgeLight,
      regular: IdentificationBadgeRegular,
      thin: IdentificationBadgeThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
