import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GlobeBoldIcon } from "../bold/globe-bold.icon";
import { GlobeDuotoneIcon } from "../duotone/globe-duotone.icon";
import { GlobeFillIcon } from "../fill/globe-fill.icon";
import { GlobeLightIcon } from "../light/globe-light.icon";
import { GlobeRegularIcon } from "../regular/globe-regular.icon";
import { GlobeThinIcon } from "../thin/globe-thin.icon";

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
