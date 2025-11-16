import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ExcludeBold } from "../bold";
import { ExcludeDuotone } from "../duotone";
import { ExcludeFill } from "../fill";
import { ExcludeLight } from "../light";
import { ExcludeRegular } from "../regular";
import { ExcludeThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Exclude = memo(function Exclude(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ExcludeBold,
      duotone: ExcludeDuotone,
      fill: ExcludeFill,
      light: ExcludeLight,
      regular: ExcludeRegular,
      thin: ExcludeThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
