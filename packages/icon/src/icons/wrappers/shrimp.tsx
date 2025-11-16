import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ShrimpBold } from "../bold";
import { ShrimpDuotone } from "../duotone";
import { ShrimpFill } from "../fill";
import { ShrimpLight } from "../light";
import { ShrimpRegular } from "../regular";
import { ShrimpThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Shrimp = memo(function Shrimp(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ShrimpBold,
      duotone: ShrimpDuotone,
      fill: ShrimpFill,
      light: ShrimpLight,
      regular: ShrimpRegular,
      thin: ShrimpThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
