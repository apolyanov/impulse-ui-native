import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowFatLineUpBold } from "../bold";
import { ArrowFatLineUpDuotone } from "../duotone";
import { ArrowFatLineUpFill } from "../fill";
import { ArrowFatLineUpLight } from "../light";
import { ArrowFatLineUpRegular } from "../regular";
import { ArrowFatLineUpThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowFatLineUp = memo(function ArrowFatLineUp(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowFatLineUpBold,
      duotone: ArrowFatLineUpDuotone,
      fill: ArrowFatLineUpFill,
      light: ArrowFatLineUpLight,
      regular: ArrowFatLineUpRegular,
      thin: ArrowFatLineUpThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
