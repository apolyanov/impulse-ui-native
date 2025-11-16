import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MopedBold } from "../bold";
import { MopedDuotone } from "../duotone";
import { MopedFill } from "../fill";
import { MopedLight } from "../light";
import { MopedRegular } from "../regular";
import { MopedThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Moped = memo(function Moped(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MopedBold,
      duotone: MopedDuotone,
      fill: MopedFill,
      light: MopedLight,
      regular: MopedRegular,
      thin: MopedThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
