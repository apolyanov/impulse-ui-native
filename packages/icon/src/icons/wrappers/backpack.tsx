import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BackpackBold } from "../bold";
import { BackpackDuotone } from "../duotone";
import { BackpackFill } from "../fill";
import { BackpackLight } from "../light";
import { BackpackRegular } from "../regular";
import { BackpackThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Backpack = memo(function Backpack(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BackpackBold,
      duotone: BackpackDuotone,
      fill: BackpackFill,
      light: BackpackLight,
      regular: BackpackRegular,
      thin: BackpackThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
