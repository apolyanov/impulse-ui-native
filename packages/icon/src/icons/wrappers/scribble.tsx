import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ScribbleBold } from "../bold";
import { ScribbleDuotone } from "../duotone";
import { ScribbleFill } from "../fill";
import { ScribbleLight } from "../light";
import { ScribbleRegular } from "../regular";
import { ScribbleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Scribble = memo(function Scribble(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ScribbleBold,
      duotone: ScribbleDuotone,
      fill: ScribbleFill,
      light: ScribbleLight,
      regular: ScribbleRegular,
      thin: ScribbleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
