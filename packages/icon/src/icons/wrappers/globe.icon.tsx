import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GlobeBoldIcon } from "../bold";
import { GlobeDuotoneIcon } from "../duotone";
import { GlobeFillIcon } from "../fill";
import { GlobeLightIcon } from "../light";
import { GlobeRegularIcon } from "../regular";
import { GlobeThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GlobeIcon = memo(function Globe(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GlobeBoldIcon,
      duotone: GlobeDuotoneIcon,
      fill: GlobeFillIcon,
      light: GlobeLightIcon,
      regular: GlobeRegularIcon,
      thin: GlobeThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
