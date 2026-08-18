import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { EyesBoldIcon } from "../bold/eyes-bold.icon";
import { EyesDuotoneIcon } from "../duotone/eyes-duotone.icon";
import { EyesFillIcon } from "../fill/eyes-fill.icon";
import { EyesLightIcon } from "../light/eyes-light.icon";
import { EyesRegularIcon } from "../regular/eyes-regular.icon";
import { EyesThinIcon } from "../thin/eyes-thin.icon";

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
