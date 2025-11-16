import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MoonBold } from "../bold";
import { MoonDuotone } from "../duotone";
import { MoonFill } from "../fill";
import { MoonLight } from "../light";
import { MoonRegular } from "../regular";
import { MoonThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Moon = memo(function Moon(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MoonBold,
      duotone: MoonDuotone,
      fill: MoonFill,
      light: MoonLight,
      regular: MoonRegular,
      thin: MoonThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
