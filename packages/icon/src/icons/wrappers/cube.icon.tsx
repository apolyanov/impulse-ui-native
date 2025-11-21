import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CubeBoldIcon } from "../bold";
import { CubeDuotoneIcon } from "../duotone";
import { CubeFillIcon } from "../fill";
import { CubeLightIcon } from "../light";
import { CubeRegularIcon } from "../regular";
import { CubeThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
