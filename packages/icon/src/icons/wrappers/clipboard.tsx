import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ClipboardBold } from "../bold";
import { ClipboardDuotone } from "../duotone";
import { ClipboardFill } from "../fill";
import { ClipboardLight } from "../light";
import { ClipboardRegular } from "../regular";
import { ClipboardThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Clipboard = memo(function Clipboard(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ClipboardBold,
      duotone: ClipboardDuotone,
      fill: ClipboardFill,
      light: ClipboardLight,
      regular: ClipboardRegular,
      thin: ClipboardThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
