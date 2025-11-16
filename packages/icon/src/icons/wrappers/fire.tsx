import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FireBold } from "../bold";
import { FireDuotone } from "../duotone";
import { FireFill } from "../fill";
import { FireLight } from "../light";
import { FireRegular } from "../regular";
import { FireThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Fire = memo(function Fire(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FireBold,
      duotone: FireDuotone,
      fill: FireFill,
      light: FireLight,
      regular: FireRegular,
      thin: FireThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
