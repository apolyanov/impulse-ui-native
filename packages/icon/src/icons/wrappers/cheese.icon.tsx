import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CheeseBoldIcon } from "../bold/cheese-bold.icon";
import { CheeseDuotoneIcon } from "../duotone/cheese-duotone.icon";
import { CheeseFillIcon } from "../fill/cheese-fill.icon";
import { CheeseLightIcon } from "../light/cheese-light.icon";
import { CheeseRegularIcon } from "../regular/cheese-regular.icon";
import { CheeseThinIcon } from "../thin/cheese-thin.icon";

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
