import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { StoolBold } from "../bold";
import { StoolDuotone } from "../duotone";
import { StoolFill } from "../fill";
import { StoolLight } from "../light";
import { StoolRegular } from "../regular";
import { StoolThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Stool = memo(function Stool(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: StoolBold,
      duotone: StoolDuotone,
      fill: StoolFill,
      light: StoolLight,
      regular: StoolRegular,
      thin: StoolThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
