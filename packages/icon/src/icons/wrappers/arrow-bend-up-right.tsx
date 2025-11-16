import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowBendUpRightBold } from "../bold";
import { ArrowBendUpRightDuotone } from "../duotone";
import { ArrowBendUpRightFill } from "../fill";
import { ArrowBendUpRightLight } from "../light";
import { ArrowBendUpRightRegular } from "../regular";
import { ArrowBendUpRightThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowBendUpRight = memo(function ArrowBendUpRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowBendUpRightBold,
      duotone: ArrowBendUpRightDuotone,
      fill: ArrowBendUpRightFill,
      light: ArrowBendUpRightLight,
      regular: ArrowBendUpRightRegular,
      thin: ArrowBendUpRightThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
