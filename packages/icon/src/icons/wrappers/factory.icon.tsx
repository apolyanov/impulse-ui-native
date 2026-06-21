import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FactoryBoldIcon } from "../bold";
import { FactoryDuotoneIcon } from "../duotone";
import { FactoryFillIcon } from "../fill";
import { FactoryLightIcon } from "../light";
import { FactoryRegularIcon } from "../regular";
import { FactoryThinIcon } from "../thin";

export const FactoryIcon = memo(function Factory(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FactoryBoldIcon,
      duotone: FactoryDuotoneIcon,
      fill: FactoryFillIcon,
      light: FactoryLightIcon,
      regular: FactoryRegularIcon,
      thin: FactoryThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
