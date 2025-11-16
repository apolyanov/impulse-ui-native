import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowsOutBold } from "../bold";
import { ArrowsOutDuotone } from "../duotone";
import { ArrowsOutFill } from "../fill";
import { ArrowsOutLight } from "../light";
import { ArrowsOutRegular } from "../regular";
import { ArrowsOutThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowsOut = memo(function ArrowsOut(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowsOutBold,
      duotone: ArrowsOutDuotone,
      fill: ArrowsOutFill,
      light: ArrowsOutLight,
      regular: ArrowsOutRegular,
      thin: ArrowsOutThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
