import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowBendRightDownBold } from "../bold";
import { ArrowBendRightDownDuotone } from "../duotone";
import { ArrowBendRightDownFill } from "../fill";
import { ArrowBendRightDownLight } from "../light";
import { ArrowBendRightDownRegular } from "../regular";
import { ArrowBendRightDownThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowBendRightDown = memo(function ArrowBendRightDown(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowBendRightDownBold,
      duotone: ArrowBendRightDownDuotone,
      fill: ArrowBendRightDownFill,
      light: ArrowBendRightDownLight,
      regular: ArrowBendRightDownRegular,
      thin: ArrowBendRightDownThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
