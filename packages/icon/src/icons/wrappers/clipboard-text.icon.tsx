import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ClipboardTextBoldIcon } from "../bold/clipboard-text-bold.icon";
import { ClipboardTextDuotoneIcon } from "../duotone/clipboard-text-duotone.icon";
import { ClipboardTextFillIcon } from "../fill/clipboard-text-fill.icon";
import { ClipboardTextLightIcon } from "../light/clipboard-text-light.icon";
import { ClipboardTextRegularIcon } from "../regular/clipboard-text-regular.icon";
import { ClipboardTextThinIcon } from "../thin/clipboard-text-thin.icon";

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
