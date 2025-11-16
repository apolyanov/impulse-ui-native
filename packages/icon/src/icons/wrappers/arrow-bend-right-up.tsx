import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowBendRightUpBold } from "../bold";
import { ArrowBendRightUpDuotone } from "../duotone";
import { ArrowBendRightUpFill } from "../fill";
import { ArrowBendRightUpLight } from "../light";
import { ArrowBendRightUpRegular } from "../regular";
import { ArrowBendRightUpThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowBendRightUp = memo(function ArrowBendRightUp(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowBendRightUpBold,
      duotone: ArrowBendRightUpDuotone,
      fill: ArrowBendRightUpFill,
      light: ArrowBendRightUpLight,
      regular: ArrowBendRightUpRegular,
      thin: ArrowBendRightUpThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
