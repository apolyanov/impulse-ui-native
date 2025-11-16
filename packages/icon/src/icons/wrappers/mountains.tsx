import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MountainsBold } from "../bold";
import { MountainsDuotone } from "../duotone";
import { MountainsFill } from "../fill";
import { MountainsLight } from "../light";
import { MountainsRegular } from "../regular";
import { MountainsThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Mountains = memo(function Mountains(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MountainsBold,
      duotone: MountainsDuotone,
      fill: MountainsFill,
      light: MountainsLight,
      regular: MountainsRegular,
      thin: MountainsThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
