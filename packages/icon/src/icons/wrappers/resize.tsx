import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ResizeBold } from "../bold";
import { ResizeDuotone } from "../duotone";
import { ResizeFill } from "../fill";
import { ResizeLight } from "../light";
import { ResizeRegular } from "../regular";
import { ResizeThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Resize = memo(function Resize(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ResizeBold,
      duotone: ResizeDuotone,
      fill: ResizeFill,
      light: ResizeLight,
      regular: ResizeRegular,
      thin: ResizeThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
