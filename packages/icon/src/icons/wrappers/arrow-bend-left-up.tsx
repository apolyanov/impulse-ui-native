import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowBendLeftUpBold } from "../bold";
import { ArrowBendLeftUpDuotone } from "../duotone";
import { ArrowBendLeftUpFill } from "../fill";
import { ArrowBendLeftUpLight } from "../light";
import { ArrowBendLeftUpRegular } from "../regular";
import { ArrowBendLeftUpThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowBendLeftUp = memo(function ArrowBendLeftUp(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowBendLeftUpBold,
      duotone: ArrowBendLeftUpDuotone,
      fill: ArrowBendLeftUpFill,
      light: ArrowBendLeftUpLight,
      regular: ArrowBendLeftUpRegular,
      thin: ArrowBendLeftUpThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
