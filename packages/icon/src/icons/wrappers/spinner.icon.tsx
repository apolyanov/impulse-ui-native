import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SpinnerBoldIcon } from "../bold/spinner-bold.icon";
import { SpinnerDuotoneIcon } from "../duotone/spinner-duotone.icon";
import { SpinnerFillIcon } from "../fill/spinner-fill.icon";
import { SpinnerLightIcon } from "../light/spinner-light.icon";
import { SpinnerRegularIcon } from "../regular/spinner-regular.icon";
import { SpinnerThinIcon } from "../thin/spinner-thin.icon";

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
