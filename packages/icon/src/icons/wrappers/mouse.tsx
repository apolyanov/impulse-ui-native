import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MouseBold } from "../bold";
import { MouseDuotone } from "../duotone";
import { MouseFill } from "../fill";
import { MouseLight } from "../light";
import { MouseRegular } from "../regular";
import { MouseThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Mouse = memo(function Mouse(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MouseBold,
      duotone: MouseDuotone,
      fill: MouseFill,
      light: MouseLight,
      regular: MouseRegular,
      thin: MouseThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
