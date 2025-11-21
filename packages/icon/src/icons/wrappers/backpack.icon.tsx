import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BackpackBoldIcon } from "../bold";
import { BackpackDuotoneIcon } from "../duotone";
import { BackpackFillIcon } from "../fill";
import { BackpackLightIcon } from "../light";
import { BackpackRegularIcon } from "../regular";
import { BackpackThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
