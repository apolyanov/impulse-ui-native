import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { WrenchBoldIcon } from "../bold";
import { WrenchDuotoneIcon } from "../duotone";
import { WrenchFillIcon } from "../fill";
import { WrenchLightIcon } from "../light";
import { WrenchRegularIcon } from "../regular";
import { WrenchThinIcon } from "../thin";

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
