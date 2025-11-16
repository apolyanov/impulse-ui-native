import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TrolleyBold } from "../bold";
import { TrolleyDuotone } from "../duotone";
import { TrolleyFill } from "../fill";
import { TrolleyLight } from "../light";
import { TrolleyRegular } from "../regular";
import { TrolleyThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Trolley = memo(function Trolley(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TrolleyBold,
      duotone: TrolleyDuotone,
      fill: TrolleyFill,
      light: TrolleyLight,
      regular: TrolleyRegular,
      thin: TrolleyThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
