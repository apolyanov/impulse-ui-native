import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MouseBoldIcon } from "../bold/mouse-bold.icon";
import { MouseDuotoneIcon } from "../duotone/mouse-duotone.icon";
import { MouseFillIcon } from "../fill/mouse-fill.icon";
import { MouseLightIcon } from "../light/mouse-light.icon";
import { MouseRegularIcon } from "../regular/mouse-regular.icon";
import { MouseThinIcon } from "../thin/mouse-thin.icon";

export const MouseIcon = memo(function Mouse(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MouseBoldIcon,
      duotone: MouseDuotoneIcon,
      fill: MouseFillIcon,
      light: MouseLightIcon,
      regular: MouseRegularIcon,
      thin: MouseThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
