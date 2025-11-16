import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SneakerBold } from "../bold";
import { SneakerDuotone } from "../duotone";
import { SneakerFill } from "../fill";
import { SneakerLight } from "../light";
import { SneakerRegular } from "../regular";
import { SneakerThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Sneaker = memo(function Sneaker(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SneakerBold,
      duotone: SneakerDuotone,
      fill: SneakerFill,
      light: SneakerLight,
      regular: SneakerRegular,
      thin: SneakerThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
