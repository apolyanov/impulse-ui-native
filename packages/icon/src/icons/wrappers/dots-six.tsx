import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DotsSixBold } from "../bold";
import { DotsSixDuotone } from "../duotone";
import { DotsSixFill } from "../fill";
import { DotsSixLight } from "../light";
import { DotsSixRegular } from "../regular";
import { DotsSixThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DotsSix = memo(function DotsSix(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DotsSixBold,
      duotone: DotsSixDuotone,
      fill: DotsSixFill,
      light: DotsSixLight,
      regular: DotsSixRegular,
      thin: DotsSixThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
