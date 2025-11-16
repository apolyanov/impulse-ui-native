import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TentBold } from "../bold";
import { TentDuotone } from "../duotone";
import { TentFill } from "../fill";
import { TentLight } from "../light";
import { TentRegular } from "../regular";
import { TentThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Tent = memo(function Tent(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TentBold,
      duotone: TentDuotone,
      fill: TentFill,
      light: TentLight,
      regular: TentRegular,
      thin: TentThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
