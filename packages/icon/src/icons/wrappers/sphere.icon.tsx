import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SphereBoldIcon } from "../bold/sphere-bold.icon";
import { SphereDuotoneIcon } from "../duotone/sphere-duotone.icon";
import { SphereFillIcon } from "../fill/sphere-fill.icon";
import { SphereLightIcon } from "../light/sphere-light.icon";
import { SphereRegularIcon } from "../regular/sphere-regular.icon";
import { SphereThinIcon } from "../thin/sphere-thin.icon";

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
