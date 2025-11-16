import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ChatCircleTextBold } from "../bold";
import { ChatCircleTextDuotone } from "../duotone";
import { ChatCircleTextFill } from "../fill";
import { ChatCircleTextLight } from "../light";
import { ChatCircleTextRegular } from "../regular";
import { ChatCircleTextThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ChatCircleText = memo(function ChatCircleText(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChatCircleTextBold,
      duotone: ChatCircleTextDuotone,
      fill: ChatCircleTextFill,
      light: ChatCircleTextLight,
      regular: ChatCircleTextRegular,
      thin: ChatCircleTextThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
