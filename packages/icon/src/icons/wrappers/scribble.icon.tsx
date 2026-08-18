import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ScribbleBoldIcon } from "../bold/scribble-bold.icon";
import { ScribbleDuotoneIcon } from "../duotone/scribble-duotone.icon";
import { ScribbleFillIcon } from "../fill/scribble-fill.icon";
import { ScribbleLightIcon } from "../light/scribble-light.icon";
import { ScribbleRegularIcon } from "../regular/scribble-regular.icon";
import { ScribbleThinIcon } from "../thin/scribble-thin.icon";

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
