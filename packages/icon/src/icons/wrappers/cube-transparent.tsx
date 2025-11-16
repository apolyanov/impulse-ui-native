import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CubeTransparentBold } from "../bold";
import { CubeTransparentDuotone } from "../duotone";
import { CubeTransparentFill } from "../fill";
import { CubeTransparentLight } from "../light";
import { CubeTransparentRegular } from "../regular";
import { CubeTransparentThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CubeTransparent = memo(function CubeTransparent(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CubeTransparentBold,
      duotone: CubeTransparentDuotone,
      fill: CubeTransparentFill,
      light: CubeTransparentLight,
      regular: CubeTransparentRegular,
      thin: CubeTransparentThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
