import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PipeBold } from "../bold";
import { PipeDuotone } from "../duotone";
import { PipeFill } from "../fill";
import { PipeLight } from "../light";
import { PipeRegular } from "../regular";
import { PipeThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Pipe = memo(function Pipe(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PipeBold,
      duotone: PipeDuotone,
      fill: PipeFill,
      light: PipeLight,
      regular: PipeRegular,
      thin: PipeThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
