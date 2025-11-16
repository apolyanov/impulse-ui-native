import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ChatTextBold } from "../bold";
import { ChatTextDuotone } from "../duotone";
import { ChatTextFill } from "../fill";
import { ChatTextLight } from "../light";
import { ChatTextRegular } from "../regular";
import { ChatTextThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ChatText = memo(function ChatText(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChatTextBold,
      duotone: ChatTextDuotone,
      fill: ChatTextFill,
      light: ChatTextLight,
      regular: ChatTextRegular,
      thin: ChatTextThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
