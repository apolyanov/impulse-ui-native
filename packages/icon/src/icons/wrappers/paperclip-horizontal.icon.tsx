import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PaperclipHorizontalBoldIcon } from "../bold";
import { PaperclipHorizontalDuotoneIcon } from "../duotone";
import { PaperclipHorizontalFillIcon } from "../fill";
import { PaperclipHorizontalLightIcon } from "../light";
import { PaperclipHorizontalRegularIcon } from "../regular";
import { PaperclipHorizontalThinIcon } from "../thin";

export const PaperclipHorizontalIcon = memo(function PaperclipHorizontal(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PaperclipHorizontalBoldIcon,
      duotone: PaperclipHorizontalDuotoneIcon,
      fill: PaperclipHorizontalFillIcon,
      light: PaperclipHorizontalLightIcon,
      regular: PaperclipHorizontalRegularIcon,
      thin: PaperclipHorizontalThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
