import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowBendLeftDownBold } from "../bold";
import { ArrowBendLeftDownDuotone } from "../duotone";
import { ArrowBendLeftDownFill } from "../fill";
import { ArrowBendLeftDownLight } from "../light";
import { ArrowBendLeftDownRegular } from "../regular";
import { ArrowBendLeftDownThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowBendLeftDown = memo(function ArrowBendLeftDown(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowBendLeftDownBold,
      duotone: ArrowBendLeftDownDuotone,
      fill: ArrowBendLeftDownFill,
      light: ArrowBendLeftDownLight,
      regular: ArrowBendLeftDownRegular,
      thin: ArrowBendLeftDownThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
