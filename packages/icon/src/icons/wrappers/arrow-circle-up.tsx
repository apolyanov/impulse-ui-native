import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowCircleUpBold } from "../bold";
import { ArrowCircleUpDuotone } from "../duotone";
import { ArrowCircleUpFill } from "../fill";
import { ArrowCircleUpLight } from "../light";
import { ArrowCircleUpRegular } from "../regular";
import { ArrowCircleUpThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowCircleUp = memo(function ArrowCircleUp(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowCircleUpBold,
      duotone: ArrowCircleUpDuotone,
      fill: ArrowCircleUpFill,
      light: ArrowCircleUpLight,
      regular: ArrowCircleUpRegular,
      thin: ArrowCircleUpThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
