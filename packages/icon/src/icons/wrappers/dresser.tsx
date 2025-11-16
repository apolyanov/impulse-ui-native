import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DresserBold } from "../bold";
import { DresserDuotone } from "../duotone";
import { DresserFill } from "../fill";
import { DresserLight } from "../light";
import { DresserRegular } from "../regular";
import { DresserThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Dresser = memo(function Dresser(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DresserBold,
      duotone: DresserDuotone,
      fill: DresserFill,
      light: DresserLight,
      regular: DresserRegular,
      thin: DresserThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
