import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ChatCircleTextBoldIcon } from "../bold/chat-circle-text-bold.icon";
import { ChatCircleTextDuotoneIcon } from "../duotone/chat-circle-text-duotone.icon";
import { ChatCircleTextFillIcon } from "../fill/chat-circle-text-fill.icon";
import { ChatCircleTextLightIcon } from "../light/chat-circle-text-light.icon";
import { ChatCircleTextRegularIcon } from "../regular/chat-circle-text-regular.icon";
import { ChatCircleTextThinIcon } from "../thin/chat-circle-text-thin.icon";

export const ChatCircleTextIcon = memo(function ChatCircleText(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChatCircleTextBoldIcon,
      duotone: ChatCircleTextDuotoneIcon,
      fill: ChatCircleTextFillIcon,
      light: ChatCircleTextLightIcon,
      regular: ChatCircleTextRegularIcon,
      thin: ChatCircleTextThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
