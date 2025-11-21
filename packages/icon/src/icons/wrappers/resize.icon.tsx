import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ResizeBoldIcon } from "../bold";
import { ResizeDuotoneIcon } from "../duotone";
import { ResizeFillIcon } from "../fill";
import { ResizeLightIcon } from "../light";
import { ResizeRegularIcon } from "../regular";
import { ResizeThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ResizeIcon = memo(function Resize(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ResizeBoldIcon,
      duotone: ResizeDuotoneIcon,
      fill: ResizeFillIcon,
      light: ResizeLightIcon,
      regular: ResizeRegularIcon,
      thin: ResizeThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
