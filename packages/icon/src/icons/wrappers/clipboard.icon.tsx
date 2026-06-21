import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ClipboardBoldIcon } from "../bold";
import { ClipboardDuotoneIcon } from "../duotone";
import { ClipboardFillIcon } from "../fill";
import { ClipboardLightIcon } from "../light";
import { ClipboardRegularIcon } from "../regular";
import { ClipboardThinIcon } from "../thin";

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
