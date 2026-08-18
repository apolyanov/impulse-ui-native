import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BackpackBoldIcon } from "../bold/backpack-bold.icon";
import { BackpackDuotoneIcon } from "../duotone/backpack-duotone.icon";
import { BackpackFillIcon } from "../fill/backpack-fill.icon";
import { BackpackLightIcon } from "../light/backpack-light.icon";
import { BackpackRegularIcon } from "../regular/backpack-regular.icon";
import { BackpackThinIcon } from "../thin/backpack-thin.icon";

export const BackpackIcon = memo(function Backpack(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BackpackBoldIcon,
      duotone: BackpackDuotoneIcon,
      fill: BackpackFillIcon,
      light: BackpackLightIcon,
      regular: BackpackRegularIcon,
      thin: BackpackThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
