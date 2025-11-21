import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ChatTeardropTextBoldIcon } from "../bold";
import { ChatTeardropTextDuotoneIcon } from "../duotone";
import { ChatTeardropTextFillIcon } from "../fill";
import { ChatTeardropTextLightIcon } from "../light";
import { ChatTeardropTextRegularIcon } from "../regular";
import { ChatTeardropTextThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ChatTeardropTextIcon = memo(function ChatTeardropText(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChatTeardropTextBoldIcon,
      duotone: ChatTeardropTextDuotoneIcon,
      fill: ChatTeardropTextFillIcon,
      light: ChatTeardropTextLightIcon,
      regular: ChatTeardropTextRegularIcon,
      thin: ChatTeardropTextThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
