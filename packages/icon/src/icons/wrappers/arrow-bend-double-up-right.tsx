import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowBendDoubleUpRightBold } from "../bold";
import { ArrowBendDoubleUpRightDuotone } from "../duotone";
import { ArrowBendDoubleUpRightFill } from "../fill";
import { ArrowBendDoubleUpRightLight } from "../light";
import { ArrowBendDoubleUpRightRegular } from "../regular";
import { ArrowBendDoubleUpRightThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowBendDoubleUpRight = memo(function ArrowBendDoubleUpRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowBendDoubleUpRightBold,
      duotone: ArrowBendDoubleUpRightDuotone,
      fill: ArrowBendDoubleUpRightFill,
      light: ArrowBendDoubleUpRightLight,
      regular: ArrowBendDoubleUpRightRegular,
      thin: ArrowBendDoubleUpRightThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
