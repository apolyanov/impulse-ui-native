import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DotsSixBoldIcon } from "../bold";
import { DotsSixDuotoneIcon } from "../duotone";
import { DotsSixFillIcon } from "../fill";
import { DotsSixLightIcon } from "../light";
import { DotsSixRegularIcon } from "../regular";
import { DotsSixThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DotsSixIcon = memo(function DotsSix(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DotsSixBoldIcon,
      duotone: DotsSixDuotoneIcon,
      fill: DotsSixFillIcon,
      light: DotsSixLightIcon,
      regular: DotsSixRegularIcon,
      thin: DotsSixThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
