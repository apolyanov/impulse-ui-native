import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowsDownUpBold } from "../bold";
import { ArrowsDownUpDuotone } from "../duotone";
import { ArrowsDownUpFill } from "../fill";
import { ArrowsDownUpLight } from "../light";
import { ArrowsDownUpRegular } from "../regular";
import { ArrowsDownUpThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowsDownUp = memo(function ArrowsDownUp(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowsDownUpBold,
      duotone: ArrowsDownUpDuotone,
      fill: ArrowsDownUpFill,
      light: ArrowsDownUpLight,
      regular: ArrowsDownUpRegular,
      thin: ArrowsDownUpThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
