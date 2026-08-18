import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CubeBoldIcon } from "../bold/cube-bold.icon";
import { CubeDuotoneIcon } from "../duotone/cube-duotone.icon";
import { CubeFillIcon } from "../fill/cube-fill.icon";
import { CubeLightIcon } from "../light/cube-light.icon";
import { CubeRegularIcon } from "../regular/cube-regular.icon";
import { CubeThinIcon } from "../thin/cube-thin.icon";

export const CubeIcon = memo(function Cube(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CubeBoldIcon,
      duotone: CubeDuotoneIcon,
      fill: CubeFillIcon,
      light: CubeLightIcon,
      regular: CubeRegularIcon,
      thin: CubeThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
