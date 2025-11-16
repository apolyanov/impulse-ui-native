import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowUpRightBold } from "../bold";
import { ArrowUpRightDuotone } from "../duotone";
import { ArrowUpRightFill } from "../fill";
import { ArrowUpRightLight } from "../light";
import { ArrowUpRightRegular } from "../regular";
import { ArrowUpRightThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowUpRight = memo(function ArrowUpRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowUpRightBold,
      duotone: ArrowUpRightDuotone,
      fill: ArrowUpRightFill,
      light: ArrowUpRightLight,
      regular: ArrowUpRightRegular,
      thin: ArrowUpRightThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
