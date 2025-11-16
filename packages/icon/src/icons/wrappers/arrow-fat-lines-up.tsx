import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowFatLinesUpBold } from "../bold";
import { ArrowFatLinesUpDuotone } from "../duotone";
import { ArrowFatLinesUpFill } from "../fill";
import { ArrowFatLinesUpLight } from "../light";
import { ArrowFatLinesUpRegular } from "../regular";
import { ArrowFatLinesUpThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowFatLinesUp = memo(function ArrowFatLinesUp(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowFatLinesUpBold,
      duotone: ArrowFatLinesUpDuotone,
      fill: ArrowFatLinesUpFill,
      light: ArrowFatLinesUpLight,
      regular: ArrowFatLinesUpRegular,
      thin: ArrowFatLinesUpThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
