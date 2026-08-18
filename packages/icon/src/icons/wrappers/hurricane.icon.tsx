import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HurricaneBoldIcon } from "../bold/hurricane-bold.icon";
import { HurricaneDuotoneIcon } from "../duotone/hurricane-duotone.icon";
import { HurricaneFillIcon } from "../fill/hurricane-fill.icon";
import { HurricaneLightIcon } from "../light/hurricane-light.icon";
import { HurricaneRegularIcon } from "../regular/hurricane-regular.icon";
import { HurricaneThinIcon } from "../thin/hurricane-thin.icon";

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
