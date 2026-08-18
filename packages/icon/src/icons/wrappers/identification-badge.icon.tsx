import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { IdentificationBadgeBoldIcon } from "../bold/identification-badge-bold.icon";
import { IdentificationBadgeDuotoneIcon } from "../duotone/identification-badge-duotone.icon";
import { IdentificationBadgeFillIcon } from "../fill/identification-badge-fill.icon";
import { IdentificationBadgeLightIcon } from "../light/identification-badge-light.icon";
import { IdentificationBadgeRegularIcon } from "../regular/identification-badge-regular.icon";
import { IdentificationBadgeThinIcon } from "../thin/identification-badge-thin.icon";

export const IdentificationBadgeIcon = memo(function IdentificationBadge(
  props: IconWrapperProps,
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
