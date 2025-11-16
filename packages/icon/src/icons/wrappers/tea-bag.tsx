import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TeaBagBold } from "../bold";
import { TeaBagDuotone } from "../duotone";
import { TeaBagFill } from "../fill";
import { TeaBagLight } from "../light";
import { TeaBagRegular } from "../regular";
import { TeaBagThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TeaBag = memo(function TeaBag(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TeaBagBold,
      duotone: TeaBagDuotone,
      fill: TeaBagFill,
      light: TeaBagLight,
      regular: TeaBagRegular,
      thin: TeaBagThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
