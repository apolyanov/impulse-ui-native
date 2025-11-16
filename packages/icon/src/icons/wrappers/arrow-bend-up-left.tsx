import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowBendUpLeftBold } from "../bold";
import { ArrowBendUpLeftDuotone } from "../duotone";
import { ArrowBendUpLeftFill } from "../fill";
import { ArrowBendUpLeftLight } from "../light";
import { ArrowBendUpLeftRegular } from "../regular";
import { ArrowBendUpLeftThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowBendUpLeft = memo(function ArrowBendUpLeft(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowBendUpLeftBold,
      duotone: ArrowBendUpLeftDuotone,
      fill: ArrowBendUpLeftFill,
      light: ArrowBendUpLeftLight,
      regular: ArrowBendUpLeftRegular,
      thin: ArrowBendUpLeftThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
