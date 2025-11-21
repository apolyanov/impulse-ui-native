import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HurricaneBoldIcon } from "../bold";
import { HurricaneDuotoneIcon } from "../duotone";
import { HurricaneFillIcon } from "../fill";
import { HurricaneLightIcon } from "../light";
import { HurricaneRegularIcon } from "../regular";
import { HurricaneThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HurricaneIcon = memo(function Hurricane(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HurricaneBoldIcon,
      duotone: HurricaneDuotoneIcon,
      fill: HurricaneFillIcon,
      light: HurricaneLightIcon,
      regular: HurricaneRegularIcon,
      thin: HurricaneThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
