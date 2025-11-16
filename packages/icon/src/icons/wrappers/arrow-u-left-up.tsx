import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowULeftUpBold } from "../bold";
import { ArrowULeftUpDuotone } from "../duotone";
import { ArrowULeftUpFill } from "../fill";
import { ArrowULeftUpLight } from "../light";
import { ArrowULeftUpRegular } from "../regular";
import { ArrowULeftUpThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowULeftUp = memo(function ArrowULeftUp(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowULeftUpBold,
      duotone: ArrowULeftUpDuotone,
      fill: ArrowULeftUpFill,
      light: ArrowULeftUpLight,
      regular: ArrowULeftUpRegular,
      thin: ArrowULeftUpThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
