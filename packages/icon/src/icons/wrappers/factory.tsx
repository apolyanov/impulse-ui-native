import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FactoryBold } from "../bold";
import { FactoryDuotone } from "../duotone";
import { FactoryFill } from "../fill";
import { FactoryLight } from "../light";
import { FactoryRegular } from "../regular";
import { FactoryThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Factory = memo(function Factory(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FactoryBold,
      duotone: FactoryDuotone,
      fill: FactoryFill,
      light: FactoryLight,
      regular: FactoryRegular,
      thin: FactoryThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
