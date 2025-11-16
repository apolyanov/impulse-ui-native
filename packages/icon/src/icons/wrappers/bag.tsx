import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BagBold } from "../bold";
import { BagDuotone } from "../duotone";
import { BagFill } from "../fill";
import { BagLight } from "../light";
import { BagRegular } from "../regular";
import { BagThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Bag = memo(function Bag(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BagBold,
      duotone: BagDuotone,
      fill: BagFill,
      light: BagLight,
      regular: BagRegular,
      thin: BagThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
