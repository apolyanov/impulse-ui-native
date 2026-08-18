import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ExcludeBoldIcon } from "../bold/exclude-bold.icon";
import { ExcludeDuotoneIcon } from "../duotone/exclude-duotone.icon";
import { ExcludeFillIcon } from "../fill/exclude-fill.icon";
import { ExcludeLightIcon } from "../light/exclude-light.icon";
import { ExcludeRegularIcon } from "../regular/exclude-regular.icon";
import { ExcludeThinIcon } from "../thin/exclude-thin.icon";

export const ExcludeIcon = memo(function Exclude(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ExcludeBoldIcon,
      duotone: ExcludeDuotoneIcon,
      fill: ExcludeFillIcon,
      light: ExcludeLightIcon,
      regular: ExcludeRegularIcon,
      thin: ExcludeThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
