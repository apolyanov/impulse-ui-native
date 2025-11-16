import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WheelchairBold } from "../bold";
import { WheelchairDuotone } from "../duotone";
import { WheelchairFill } from "../fill";
import { WheelchairLight } from "../light";
import { WheelchairRegular } from "../regular";
import { WheelchairThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Wheelchair = memo(function Wheelchair(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WheelchairBold,
      duotone: WheelchairDuotone,
      fill: WheelchairFill,
      light: WheelchairLight,
      regular: WheelchairRegular,
      thin: WheelchairThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
