import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ChatBoldIcon } from "../bold";
import { ChatDuotoneIcon } from "../duotone";
import { ChatFillIcon } from "../fill";
import { ChatLightIcon } from "../light";
import { ChatRegularIcon } from "../regular";
import { ChatThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ChatIcon = memo(function Chat(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChatBoldIcon,
      duotone: ChatDuotoneIcon,
      fill: ChatFillIcon,
      light: ChatLightIcon,
      regular: ChatRegularIcon,
      thin: ChatThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
