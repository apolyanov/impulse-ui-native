import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ClipboardTextBold } from "../bold";
import { ClipboardTextDuotone } from "../duotone";
import { ClipboardTextFill } from "../fill";
import { ClipboardTextLight } from "../light";
import { ClipboardTextRegular } from "../regular";
import { ClipboardTextThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ClipboardText = memo(function ClipboardText(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ClipboardTextBold,
      duotone: ClipboardTextDuotone,
      fill: ClipboardTextFill,
      light: ClipboardTextLight,
      regular: ClipboardTextRegular,
      thin: ClipboardTextThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
