import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SkipBackBold } from "../bold";
import { SkipBackDuotone } from "../duotone";
import { SkipBackFill } from "../fill";
import { SkipBackLight } from "../light";
import { SkipBackRegular } from "../regular";
import { SkipBackThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SkipBack = memo(function SkipBack(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SkipBackBold,
      duotone: SkipBackDuotone,
      fill: SkipBackFill,
      light: SkipBackLight,
      regular: SkipBackRegular,
      thin: SkipBackThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
