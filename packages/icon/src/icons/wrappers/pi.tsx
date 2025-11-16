import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PiBold } from "../bold";
import { PiDuotone } from "../duotone";
import { PiFill } from "../fill";
import { PiLight } from "../light";
import { PiRegular } from "../regular";
import { PiThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Pi = memo(function Pi(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PiBold,
      duotone: PiDuotone,
      fill: PiFill,
      light: PiLight,
      regular: PiRegular,
      thin: PiThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
