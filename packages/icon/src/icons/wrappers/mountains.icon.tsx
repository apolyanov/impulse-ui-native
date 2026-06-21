import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MountainsBoldIcon } from "../bold";
import { MountainsDuotoneIcon } from "../duotone";
import { MountainsFillIcon } from "../fill";
import { MountainsLightIcon } from "../light";
import { MountainsRegularIcon } from "../regular";
import { MountainsThinIcon } from "../thin";

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
