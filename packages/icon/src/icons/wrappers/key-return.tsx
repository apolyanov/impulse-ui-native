import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { KeyReturnBold } from "../bold";
import { KeyReturnDuotone } from "../duotone";
import { KeyReturnFill } from "../fill";
import { KeyReturnLight } from "../light";
import { KeyReturnRegular } from "../regular";
import { KeyReturnThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const KeyReturn = memo(function KeyReturn(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: KeyReturnBold,
      duotone: KeyReturnDuotone,
      fill: KeyReturnFill,
      light: KeyReturnLight,
      regular: KeyReturnRegular,
      thin: KeyReturnThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
