import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CubeBold } from "../bold";
import { CubeDuotone } from "../duotone";
import { CubeFill } from "../fill";
import { CubeLight } from "../light";
import { CubeRegular } from "../regular";
import { CubeThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Cube = memo(function Cube(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CubeBold,
      duotone: CubeDuotone,
      fill: CubeFill,
      light: CubeLight,
      regular: CubeRegular,
      thin: CubeThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
