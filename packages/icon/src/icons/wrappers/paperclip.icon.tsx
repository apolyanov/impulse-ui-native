import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PaperclipBoldIcon } from "../bold/paperclip-bold.icon";
import { PaperclipDuotoneIcon } from "../duotone/paperclip-duotone.icon";
import { PaperclipFillIcon } from "../fill/paperclip-fill.icon";
import { PaperclipLightIcon } from "../light/paperclip-light.icon";
import { PaperclipRegularIcon } from "../regular/paperclip-regular.icon";
import { PaperclipThinIcon } from "../thin/paperclip-thin.icon";

export const PaperclipIcon = memo(function Paperclip(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PaperclipBoldIcon,
      duotone: PaperclipDuotoneIcon,
      fill: PaperclipFillIcon,
      light: PaperclipLightIcon,
      regular: PaperclipRegularIcon,
      thin: PaperclipThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
