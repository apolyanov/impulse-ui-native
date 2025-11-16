import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FourKBold } from "../bold";
import { FourKDuotone } from "../duotone";
import { FourKFill } from "../fill";
import { FourKLight } from "../light";
import { FourKRegular } from "../regular";
import { FourKThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FourK = memo(function FourK(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FourKBold,
      duotone: FourKDuotone,
      fill: FourKFill,
      light: FourKLight,
      regular: FourKRegular,
      thin: FourKThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
