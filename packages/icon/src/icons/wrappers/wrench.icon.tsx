import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { WrenchBoldIcon } from "../bold/wrench-bold.icon";
import { WrenchDuotoneIcon } from "../duotone/wrench-duotone.icon";
import { WrenchFillIcon } from "../fill/wrench-fill.icon";
import { WrenchLightIcon } from "../light/wrench-light.icon";
import { WrenchRegularIcon } from "../regular/wrench-regular.icon";
import { WrenchThinIcon } from "../thin/wrench-thin.icon";

export const WrenchIcon = memo(function Wrench(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WrenchBoldIcon,
      duotone: WrenchDuotoneIcon,
      fill: WrenchFillIcon,
      light: WrenchLightIcon,
      regular: WrenchRegularIcon,
      thin: WrenchThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
