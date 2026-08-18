import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { AnchorBoldIcon } from "../bold/anchor-bold.icon";
import { AnchorDuotoneIcon } from "../duotone/anchor-duotone.icon";
import { AnchorFillIcon } from "../fill/anchor-fill.icon";
import { AnchorLightIcon } from "../light/anchor-light.icon";
import { AnchorRegularIcon } from "../regular/anchor-regular.icon";
import { AnchorThinIcon } from "../thin/anchor-thin.icon";

export const AnchorIcon = memo(function Anchor(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AnchorBoldIcon,
      duotone: AnchorDuotoneIcon,
      fill: AnchorFillIcon,
      light: AnchorLightIcon,
      regular: AnchorRegularIcon,
      thin: AnchorThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
