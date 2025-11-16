import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SphereBold } from "../bold";
import { SphereDuotone } from "../duotone";
import { SphereFill } from "../fill";
import { SphereLight } from "../light";
import { SphereRegular } from "../regular";
import { SphereThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Sphere = memo(function Sphere(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SphereBold,
      duotone: SphereDuotone,
      fill: SphereFill,
      light: SphereLight,
      regular: SphereRegular,
      thin: SphereThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
