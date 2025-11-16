import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowFatLinesRightBold } from "../bold";
import { ArrowFatLinesRightDuotone } from "../duotone";
import { ArrowFatLinesRightFill } from "../fill";
import { ArrowFatLinesRightLight } from "../light";
import { ArrowFatLinesRightRegular } from "../regular";
import { ArrowFatLinesRightThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowFatLinesRight = memo(function ArrowFatLinesRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowFatLinesRightBold,
      duotone: ArrowFatLinesRightDuotone,
      fill: ArrowFatLinesRightFill,
      light: ArrowFatLinesRightLight,
      regular: ArrowFatLinesRightRegular,
      thin: ArrowFatLinesRightThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
