import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SpinnerBoldIcon } from "../bold";
import { SpinnerDuotoneIcon } from "../duotone";
import { SpinnerFillIcon } from "../fill";
import { SpinnerLightIcon } from "../light";
import { SpinnerRegularIcon } from "../regular";
import { SpinnerThinIcon } from "../thin";

export const SpinnerIcon = memo(function Spinner(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SpinnerBoldIcon,
      duotone: SpinnerDuotoneIcon,
      fill: SpinnerFillIcon,
      light: SpinnerLightIcon,
      regular: SpinnerRegularIcon,
      thin: SpinnerThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
