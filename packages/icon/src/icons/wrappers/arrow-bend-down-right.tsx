import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowBendDownRightBold } from "../bold";
import { ArrowBendDownRightDuotone } from "../duotone";
import { ArrowBendDownRightFill } from "../fill";
import { ArrowBendDownRightLight } from "../light";
import { ArrowBendDownRightRegular } from "../regular";
import { ArrowBendDownRightThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowBendDownRight = memo(function ArrowBendDownRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowBendDownRightBold,
      duotone: ArrowBendDownRightDuotone,
      fill: ArrowBendDownRightFill,
      light: ArrowBendDownRightLight,
      regular: ArrowBendDownRightRegular,
      thin: ArrowBendDownRightThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
