import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ChatTextBoldIcon } from "../bold";
import { ChatTextDuotoneIcon } from "../duotone";
import { ChatTextFillIcon } from "../fill";
import { ChatTextLightIcon } from "../light";
import { ChatTextRegularIcon } from "../regular";
import { ChatTextThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ChatTextIcon = memo(function ChatText(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChatTextBoldIcon,
      duotone: ChatTextDuotoneIcon,
      fill: ChatTextFillIcon,
      light: ChatTextLightIcon,
      regular: ChatTextRegularIcon,
      thin: ChatTextThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
