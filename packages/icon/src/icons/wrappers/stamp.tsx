import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { StampBold } from "../bold";
import { StampDuotone } from "../duotone";
import { StampFill } from "../fill";
import { StampLight } from "../light";
import { StampRegular } from "../regular";
import { StampThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Stamp = memo(function Stamp(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: StampBold,
      duotone: StampDuotone,
      fill: StampFill,
      light: StampLight,
      regular: StampRegular,
      thin: StampThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
