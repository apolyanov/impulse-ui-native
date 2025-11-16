import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowDownBold } from "../bold";
import { ArrowDownDuotone } from "../duotone";
import { ArrowDownFill } from "../fill";
import { ArrowDownLight } from "../light";
import { ArrowDownRegular } from "../regular";
import { ArrowDownThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowDown = memo(function ArrowDown(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowDownBold,
      duotone: ArrowDownDuotone,
      fill: ArrowDownFill,
      light: ArrowDownLight,
      regular: ArrowDownRegular,
      thin: ArrowDownThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
