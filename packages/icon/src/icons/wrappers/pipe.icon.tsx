import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PipeBoldIcon } from "../bold/pipe-bold.icon";
import { PipeDuotoneIcon } from "../duotone/pipe-duotone.icon";
import { PipeFillIcon } from "../fill/pipe-fill.icon";
import { PipeLightIcon } from "../light/pipe-light.icon";
import { PipeRegularIcon } from "../regular/pipe-regular.icon";
import { PipeThinIcon } from "../thin/pipe-thin.icon";

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
