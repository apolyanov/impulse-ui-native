import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { KeyReturnBoldIcon } from "../bold/key-return-bold.icon";
import { KeyReturnDuotoneIcon } from "../duotone/key-return-duotone.icon";
import { KeyReturnFillIcon } from "../fill/key-return-fill.icon";
import { KeyReturnLightIcon } from "../light/key-return-light.icon";
import { KeyReturnRegularIcon } from "../regular/key-return-regular.icon";
import { KeyReturnThinIcon } from "../thin/key-return-thin.icon";

export const KeyReturnIcon = memo(function KeyReturn(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: KeyReturnBoldIcon,
      duotone: KeyReturnDuotoneIcon,
      fill: KeyReturnFillIcon,
      light: KeyReturnLightIcon,
      regular: KeyReturnRegularIcon,
      thin: KeyReturnThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
