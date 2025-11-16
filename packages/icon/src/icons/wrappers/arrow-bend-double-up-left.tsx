import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowBendDoubleUpLeftBold } from "../bold";
import { ArrowBendDoubleUpLeftDuotone } from "../duotone";
import { ArrowBendDoubleUpLeftFill } from "../fill";
import { ArrowBendDoubleUpLeftLight } from "../light";
import { ArrowBendDoubleUpLeftRegular } from "../regular";
import { ArrowBendDoubleUpLeftThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowBendDoubleUpLeft = memo(function ArrowBendDoubleUpLeft(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowBendDoubleUpLeftBold,
      duotone: ArrowBendDoubleUpLeftDuotone,
      fill: ArrowBendDoubleUpLeftFill,
      light: ArrowBendDoubleUpLeftLight,
      regular: ArrowBendDoubleUpLeftRegular,
      thin: ArrowBendDoubleUpLeftThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
