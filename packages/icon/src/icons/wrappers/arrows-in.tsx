import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowsInBold } from "../bold";
import { ArrowsInDuotone } from "../duotone";
import { ArrowsInFill } from "../fill";
import { ArrowsInLight } from "../light";
import { ArrowsInRegular } from "../regular";
import { ArrowsInThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowsIn = memo(function ArrowsIn(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowsInBold,
      duotone: ArrowsInDuotone,
      fill: ArrowsInFill,
      light: ArrowsInLight,
      regular: ArrowsInRegular,
      thin: ArrowsInThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
