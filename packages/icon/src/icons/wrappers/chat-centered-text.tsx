import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ChatCenteredTextBold } from "../bold";
import { ChatCenteredTextDuotone } from "../duotone";
import { ChatCenteredTextFill } from "../fill";
import { ChatCenteredTextLight } from "../light";
import { ChatCenteredTextRegular } from "../regular";
import { ChatCenteredTextThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ChatCenteredText = memo(function ChatCenteredText(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChatCenteredTextBold,
      duotone: ChatCenteredTextDuotone,
      fill: ChatCenteredTextFill,
      light: ChatCenteredTextLight,
      regular: ChatCenteredTextRegular,
      thin: ChatCenteredTextThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
