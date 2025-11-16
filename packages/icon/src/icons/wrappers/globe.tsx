import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GlobeBold } from "../bold";
import { GlobeDuotone } from "../duotone";
import { GlobeFill } from "../fill";
import { GlobeLight } from "../light";
import { GlobeRegular } from "../regular";
import { GlobeThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Globe = memo(function Globe(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GlobeBold,
      duotone: GlobeDuotone,
      fill: GlobeFill,
      light: GlobeLight,
      regular: GlobeRegular,
      thin: GlobeThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
