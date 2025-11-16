import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowRightBold } from "../bold";
import { ArrowRightDuotone } from "../duotone";
import { ArrowRightFill } from "../fill";
import { ArrowRightLight } from "../light";
import { ArrowRightRegular } from "../regular";
import { ArrowRightThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowRight = memo(function ArrowRight(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowRightBold,
      duotone: ArrowRightDuotone,
      fill: ArrowRightFill,
      light: ArrowRightLight,
      regular: ArrowRightRegular,
      thin: ArrowRightThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
