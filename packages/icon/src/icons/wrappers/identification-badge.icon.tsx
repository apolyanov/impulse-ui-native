import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IdentificationBadgeBoldIcon } from "../bold";
import { IdentificationBadgeDuotoneIcon } from "../duotone";
import { IdentificationBadgeFillIcon } from "../fill";
import { IdentificationBadgeLightIcon } from "../light";
import { IdentificationBadgeRegularIcon } from "../regular";
import { IdentificationBadgeThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const IdentificationBadgeIcon = memo(function IdentificationBadge(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: IdentificationBadgeBoldIcon,
      duotone: IdentificationBadgeDuotoneIcon,
      fill: IdentificationBadgeFillIcon,
      light: IdentificationBadgeLightIcon,
      regular: IdentificationBadgeRegularIcon,
      thin: IdentificationBadgeThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
