import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TargetBold } from "../bold";
import { TargetDuotone } from "../duotone";
import { TargetFill } from "../fill";
import { TargetLight } from "../light";
import { TargetRegular } from "../regular";
import { TargetThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Target = memo(function Target(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TargetBold,
      duotone: TargetDuotone,
      fill: TargetFill,
      light: TargetLight,
      regular: TargetRegular,
      thin: TargetThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
