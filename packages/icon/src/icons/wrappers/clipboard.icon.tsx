import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ClipboardBoldIcon } from "../bold/clipboard-bold.icon";
import { ClipboardDuotoneIcon } from "../duotone/clipboard-duotone.icon";
import { ClipboardFillIcon } from "../fill/clipboard-fill.icon";
import { ClipboardLightIcon } from "../light/clipboard-light.icon";
import { ClipboardRegularIcon } from "../regular/clipboard-regular.icon";
import { ClipboardThinIcon } from "../thin/clipboard-thin.icon";

export const ClipboardIcon = memo(function Clipboard(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ClipboardBoldIcon,
      duotone: ClipboardDuotoneIcon,
      fill: ClipboardFillIcon,
      light: ClipboardLightIcon,
      regular: ClipboardRegularIcon,
      thin: ClipboardThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
