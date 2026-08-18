import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FactoryBoldIcon } from "../bold/factory-bold.icon";
import { FactoryDuotoneIcon } from "../duotone/factory-duotone.icon";
import { FactoryFillIcon } from "../fill/factory-fill.icon";
import { FactoryLightIcon } from "../light/factory-light.icon";
import { FactoryRegularIcon } from "../regular/factory-regular.icon";
import { FactoryThinIcon } from "../thin/factory-thin.icon";

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
