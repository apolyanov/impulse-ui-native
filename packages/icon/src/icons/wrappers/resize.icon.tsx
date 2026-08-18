import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ResizeBoldIcon } from "../bold/resize-bold.icon";
import { ResizeDuotoneIcon } from "../duotone/resize-duotone.icon";
import { ResizeFillIcon } from "../fill/resize-fill.icon";
import { ResizeLightIcon } from "../light/resize-light.icon";
import { ResizeRegularIcon } from "../regular/resize-regular.icon";
import { ResizeThinIcon } from "../thin/resize-thin.icon";

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
