import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CubeTransparentBoldIcon } from "../bold/cube-transparent-bold.icon";
import { CubeTransparentDuotoneIcon } from "../duotone/cube-transparent-duotone.icon";
import { CubeTransparentFillIcon } from "../fill/cube-transparent-fill.icon";
import { CubeTransparentLightIcon } from "../light/cube-transparent-light.icon";
import { CubeTransparentRegularIcon } from "../regular/cube-transparent-regular.icon";
import { CubeTransparentThinIcon } from "../thin/cube-transparent-thin.icon";

export const CubeTransparentIcon = memo(function CubeTransparent(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CubeTransparentBoldIcon,
      duotone: CubeTransparentDuotoneIcon,
      fill: CubeTransparentFillIcon,
      light: CubeTransparentLightIcon,
      regular: CubeTransparentRegularIcon,
      thin: CubeTransparentThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
