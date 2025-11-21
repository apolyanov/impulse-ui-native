import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PipeBoldIcon } from "../bold";
import { PipeDuotoneIcon } from "../duotone";
import { PipeFillIcon } from "../fill";
import { PipeLightIcon } from "../light";
import { PipeRegularIcon } from "../regular";
import { PipeThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PipeIcon = memo(function Pipe(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PipeBoldIcon,
      duotone: PipeDuotoneIcon,
      fill: PipeFillIcon,
      light: PipeLightIcon,
      regular: PipeRegularIcon,
      thin: PipeThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
