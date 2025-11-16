import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ChatBold } from "../bold";
import { ChatDuotone } from "../duotone";
import { ChatFill } from "../fill";
import { ChatLight } from "../light";
import { ChatRegular } from "../regular";
import { ChatThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Chat = memo(function Chat(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChatBold,
      duotone: ChatDuotone,
      fill: ChatFill,
      light: ChatLight,
      regular: ChatRegular,
      thin: ChatThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
