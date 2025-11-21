import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SphereBoldIcon } from "../bold";
import { SphereDuotoneIcon } from "../duotone";
import { SphereFillIcon } from "../fill";
import { SphereLightIcon } from "../light";
import { SphereRegularIcon } from "../regular";
import { SphereThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SphereIcon = memo(function Sphere(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SphereBoldIcon,
      duotone: SphereDuotoneIcon,
      fill: SphereFillIcon,
      light: SphereLightIcon,
      regular: SphereRegularIcon,
      thin: SphereThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
