import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowLeftBold } from "../bold";
import { ArrowLeftDuotone } from "../duotone";
import { ArrowLeftFill } from "../fill";
import { ArrowLeftLight } from "../light";
import { ArrowLeftRegular } from "../regular";
import { ArrowLeftThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowLeft = memo(function ArrowLeft(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowLeftBold,
      duotone: ArrowLeftDuotone,
      fill: ArrowLeftFill,
      light: ArrowLeftLight,
      regular: ArrowLeftRegular,
      thin: ArrowLeftThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
