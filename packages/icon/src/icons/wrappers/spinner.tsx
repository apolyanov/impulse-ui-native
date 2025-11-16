import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SpinnerBold } from "../bold";
import { SpinnerDuotone } from "../duotone";
import { SpinnerFill } from "../fill";
import { SpinnerLight } from "../light";
import { SpinnerRegular } from "../regular";
import { SpinnerThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Spinner = memo(function Spinner(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SpinnerBold,
      duotone: SpinnerDuotone,
      fill: SpinnerFill,
      light: SpinnerLight,
      regular: SpinnerRegular,
      thin: SpinnerThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
