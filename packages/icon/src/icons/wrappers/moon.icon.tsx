import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MoonBoldIcon } from "../bold";
import { MoonDuotoneIcon } from "../duotone";
import { MoonFillIcon } from "../fill";
import { MoonLightIcon } from "../light";
import { MoonRegularIcon } from "../regular";
import { MoonThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
