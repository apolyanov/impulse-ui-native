import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PillBold } from "../bold";
import { PillDuotone } from "../duotone";
import { PillFill } from "../fill";
import { PillLight } from "../light";
import { PillRegular } from "../regular";
import { PillThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Pill = memo(function Pill(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PillBold,
      duotone: PillDuotone,
      fill: PillFill,
      light: PillLight,
      regular: PillRegular,
      thin: PillThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
