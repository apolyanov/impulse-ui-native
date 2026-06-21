import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CheeseBoldIcon } from "../bold";
import { CheeseDuotoneIcon } from "../duotone";
import { CheeseFillIcon } from "../fill";
import { CheeseLightIcon } from "../light";
import { CheeseRegularIcon } from "../regular";
import { CheeseThinIcon } from "../thin";

export const CheeseIcon = memo(function Cheese(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CheeseBoldIcon,
      duotone: CheeseDuotoneIcon,
      fill: CheeseFillIcon,
      light: CheeseLightIcon,
      regular: CheeseRegularIcon,
      thin: CheeseThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
