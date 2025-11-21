import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ScribbleBoldIcon } from "../bold";
import { ScribbleDuotoneIcon } from "../duotone";
import { ScribbleFillIcon } from "../fill";
import { ScribbleLightIcon } from "../light";
import { ScribbleRegularIcon } from "../regular";
import { ScribbleThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ScribbleIcon = memo(function Scribble(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ScribbleBoldIcon,
      duotone: ScribbleDuotoneIcon,
      fill: ScribbleFillIcon,
      light: ScribbleLightIcon,
      regular: ScribbleRegularIcon,
      thin: ScribbleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
