import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ChatCenteredDotsBoldIcon } from "../bold";
import { ChatCenteredDotsDuotoneIcon } from "../duotone";
import { ChatCenteredDotsFillIcon } from "../fill";
import { ChatCenteredDotsLightIcon } from "../light";
import { ChatCenteredDotsRegularIcon } from "../regular";
import { ChatCenteredDotsThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ChatCenteredDotsIcon = memo(function ChatCenteredDots(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChatCenteredDotsBoldIcon,
      duotone: ChatCenteredDotsDuotoneIcon,
      fill: ChatCenteredDotsFillIcon,
      light: ChatCenteredDotsLightIcon,
      regular: ChatCenteredDotsRegularIcon,
      thin: ChatCenteredDotsThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
