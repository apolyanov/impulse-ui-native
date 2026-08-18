import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PaperclipHorizontalBoldIcon } from "../bold/paperclip-horizontal-bold.icon";
import { PaperclipHorizontalDuotoneIcon } from "../duotone/paperclip-horizontal-duotone.icon";
import { PaperclipHorizontalFillIcon } from "../fill/paperclip-horizontal-fill.icon";
import { PaperclipHorizontalLightIcon } from "../light/paperclip-horizontal-light.icon";
import { PaperclipHorizontalRegularIcon } from "../regular/paperclip-horizontal-regular.icon";
import { PaperclipHorizontalThinIcon } from "../thin/paperclip-horizontal-thin.icon";

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
