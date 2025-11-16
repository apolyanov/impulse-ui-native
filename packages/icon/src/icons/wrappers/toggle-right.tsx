import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ToggleRightBold } from "../bold";
import { ToggleRightDuotone } from "../duotone";
import { ToggleRightFill } from "../fill";
import { ToggleRightLight } from "../light";
import { ToggleRightRegular } from "../regular";
import { ToggleRightThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ToggleRight = memo(function ToggleRight(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ToggleRightBold,
      duotone: ToggleRightDuotone,
      fill: ToggleRightFill,
      light: ToggleRightLight,
      regular: ToggleRightRegular,
      thin: ToggleRightThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
