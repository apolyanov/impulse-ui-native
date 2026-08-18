import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TrolleyBoldIcon } from "../bold/trolley-bold.icon";
import { TrolleyDuotoneIcon } from "../duotone/trolley-duotone.icon";
import { TrolleyFillIcon } from "../fill/trolley-fill.icon";
import { TrolleyLightIcon } from "../light/trolley-light.icon";
import { TrolleyRegularIcon } from "../regular/trolley-regular.icon";
import { TrolleyThinIcon } from "../thin/trolley-thin.icon";

export const TrolleyIcon = memo(function Trolley(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TrolleyBoldIcon,
      duotone: TrolleyDuotoneIcon,
      fill: TrolleyFillIcon,
      light: TrolleyLightIcon,
      regular: TrolleyRegularIcon,
      thin: TrolleyThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
