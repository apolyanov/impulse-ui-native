import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TrolleyBoldIcon } from "../bold";
import { TrolleyDuotoneIcon } from "../duotone";
import { TrolleyFillIcon } from "../fill";
import { TrolleyLightIcon } from "../light";
import { TrolleyRegularIcon } from "../regular";
import { TrolleyThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
