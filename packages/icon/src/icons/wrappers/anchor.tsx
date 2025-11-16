import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AnchorBold } from "../bold";
import { AnchorDuotone } from "../duotone";
import { AnchorFill } from "../fill";
import { AnchorLight } from "../light";
import { AnchorRegular } from "../regular";
import { AnchorThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Anchor = memo(function Anchor(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AnchorBold,
      duotone: AnchorDuotone,
      fill: AnchorFill,
      light: AnchorLight,
      regular: AnchorRegular,
      thin: AnchorThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
