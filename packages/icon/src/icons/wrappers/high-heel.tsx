import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HighHeelBold } from "../bold";
import { HighHeelDuotone } from "../duotone";
import { HighHeelFill } from "../fill";
import { HighHeelLight } from "../light";
import { HighHeelRegular } from "../regular";
import { HighHeelThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HighHeel = memo(function HighHeel(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HighHeelBold,
      duotone: HighHeelDuotone,
      fill: HighHeelFill,
      light: HighHeelLight,
      regular: HighHeelRegular,
      thin: HighHeelThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
