import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowURightUpBold } from "../bold";
import { ArrowURightUpDuotone } from "../duotone";
import { ArrowURightUpFill } from "../fill";
import { ArrowURightUpLight } from "../light";
import { ArrowURightUpRegular } from "../regular";
import { ArrowURightUpThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowURightUp = memo(function ArrowURightUp(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowURightUpBold,
      duotone: ArrowURightUpDuotone,
      fill: ArrowURightUpFill,
      light: ArrowURightUpLight,
      regular: ArrowURightUpRegular,
      thin: ArrowURightUpThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
