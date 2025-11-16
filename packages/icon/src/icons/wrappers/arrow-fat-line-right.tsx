import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowFatLineRightBold } from "../bold";
import { ArrowFatLineRightDuotone } from "../duotone";
import { ArrowFatLineRightFill } from "../fill";
import { ArrowFatLineRightLight } from "../light";
import { ArrowFatLineRightRegular } from "../regular";
import { ArrowFatLineRightThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowFatLineRight = memo(function ArrowFatLineRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowFatLineRightBold,
      duotone: ArrowFatLineRightDuotone,
      fill: ArrowFatLineRightFill,
      light: ArrowFatLineRightLight,
      regular: ArrowFatLineRightRegular,
      thin: ArrowFatLineRightThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
