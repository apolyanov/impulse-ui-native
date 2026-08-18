import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MountainsBoldIcon } from "../bold/mountains-bold.icon";
import { MountainsDuotoneIcon } from "../duotone/mountains-duotone.icon";
import { MountainsFillIcon } from "../fill/mountains-fill.icon";
import { MountainsLightIcon } from "../light/mountains-light.icon";
import { MountainsRegularIcon } from "../regular/mountains-regular.icon";
import { MountainsThinIcon } from "../thin/mountains-thin.icon";

export const MountainsIcon = memo(function Mountains(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MountainsBoldIcon,
      duotone: MountainsDuotoneIcon,
      fill: MountainsFillIcon,
      light: MountainsLightIcon,
      regular: MountainsRegularIcon,
      thin: MountainsThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
