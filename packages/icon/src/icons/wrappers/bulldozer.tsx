import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BulldozerBold } from "../bold";
import { BulldozerDuotone } from "../duotone";
import { BulldozerFill } from "../fill";
import { BulldozerLight } from "../light";
import { BulldozerRegular } from "../regular";
import { BulldozerThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Bulldozer = memo(function Bulldozer(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BulldozerBold,
      duotone: BulldozerDuotone,
      fill: BulldozerFill,
      light: BulldozerLight,
      regular: BulldozerRegular,
      thin: BulldozerThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
