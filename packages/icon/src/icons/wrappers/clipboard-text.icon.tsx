import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ClipboardTextBoldIcon } from "../bold";
import { ClipboardTextDuotoneIcon } from "../duotone";
import { ClipboardTextFillIcon } from "../fill";
import { ClipboardTextLightIcon } from "../light";
import { ClipboardTextRegularIcon } from "../regular";
import { ClipboardTextThinIcon } from "../thin";

export const ClipboardTextIcon = memo(function ClipboardText(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ClipboardTextBoldIcon,
      duotone: ClipboardTextDuotoneIcon,
      fill: ClipboardTextFillIcon,
      light: ClipboardTextLightIcon,
      regular: ClipboardTextRegularIcon,
      thin: ClipboardTextThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
