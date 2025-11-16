import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ChatCenteredBold } from "../bold";
import { ChatCenteredDuotone } from "../duotone";
import { ChatCenteredFill } from "../fill";
import { ChatCenteredLight } from "../light";
import { ChatCenteredRegular } from "../regular";
import { ChatCenteredThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ChatCentered = memo(function ChatCentered(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChatCenteredBold,
      duotone: ChatCenteredDuotone,
      fill: ChatCenteredFill,
      light: ChatCenteredLight,
      regular: ChatCenteredRegular,
      thin: ChatCenteredThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
