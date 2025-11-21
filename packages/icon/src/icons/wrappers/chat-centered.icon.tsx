import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ChatCenteredBoldIcon } from "../bold";
import { ChatCenteredDuotoneIcon } from "../duotone";
import { ChatCenteredFillIcon } from "../fill";
import { ChatCenteredLightIcon } from "../light";
import { ChatCenteredRegularIcon } from "../regular";
import { ChatCenteredThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ChatCenteredIcon = memo(function ChatCentered(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChatCenteredBoldIcon,
      duotone: ChatCenteredDuotoneIcon,
      fill: ChatCenteredFillIcon,
      light: ChatCenteredLightIcon,
      regular: ChatCenteredRegularIcon,
      thin: ChatCenteredThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
