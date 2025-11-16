import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FarmBold } from "../bold";
import { FarmDuotone } from "../duotone";
import { FarmFill } from "../fill";
import { FarmLight } from "../light";
import { FarmRegular } from "../regular";
import { FarmThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Farm = memo(function Farm(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FarmBold,
      duotone: FarmDuotone,
      fill: FarmFill,
      light: FarmLight,
      regular: FarmRegular,
      thin: FarmThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
