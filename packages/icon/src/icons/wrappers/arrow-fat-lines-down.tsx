import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowFatLinesDownBold } from "../bold";
import { ArrowFatLinesDownDuotone } from "../duotone";
import { ArrowFatLinesDownFill } from "../fill";
import { ArrowFatLinesDownLight } from "../light";
import { ArrowFatLinesDownRegular } from "../regular";
import { ArrowFatLinesDownThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowFatLinesDown = memo(function ArrowFatLinesDown(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowFatLinesDownBold,
      duotone: ArrowFatLinesDownDuotone,
      fill: ArrowFatLinesDownFill,
      light: ArrowFatLinesDownLight,
      regular: ArrowFatLinesDownRegular,
      thin: ArrowFatLinesDownThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
