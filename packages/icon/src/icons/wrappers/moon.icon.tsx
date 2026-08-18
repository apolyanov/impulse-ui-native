import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MoonBoldIcon } from "../bold/moon-bold.icon";
import { MoonDuotoneIcon } from "../duotone/moon-duotone.icon";
import { MoonFillIcon } from "../fill/moon-fill.icon";
import { MoonLightIcon } from "../light/moon-light.icon";
import { MoonRegularIcon } from "../regular/moon-regular.icon";
import { MoonThinIcon } from "../thin/moon-thin.icon";

export const MoonIcon = memo(function Moon(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MoonBoldIcon,
      duotone: MoonDuotoneIcon,
      fill: MoonFillIcon,
      light: MoonLightIcon,
      regular: MoonRegularIcon,
      thin: MoonThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
