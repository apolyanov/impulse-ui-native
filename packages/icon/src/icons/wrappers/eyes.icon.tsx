import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { EyesBoldIcon } from "../bold";
import { EyesDuotoneIcon } from "../duotone";
import { EyesFillIcon } from "../fill";
import { EyesLightIcon } from "../light";
import { EyesRegularIcon } from "../regular";
import { EyesThinIcon } from "../thin";

export const EyesIcon = memo(function Eyes(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: EyesBoldIcon,
      duotone: EyesDuotoneIcon,
      fill: EyesFillIcon,
      light: EyesLightIcon,
      regular: EyesRegularIcon,
      thin: EyesThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
