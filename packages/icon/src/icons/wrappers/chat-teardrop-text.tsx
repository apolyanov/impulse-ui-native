import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ChatTeardropTextBold } from "../bold";
import { ChatTeardropTextDuotone } from "../duotone";
import { ChatTeardropTextFill } from "../fill";
import { ChatTeardropTextLight } from "../light";
import { ChatTeardropTextRegular } from "../regular";
import { ChatTeardropTextThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ChatTeardropText = memo(function ChatTeardropText(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChatTeardropTextBold,
      duotone: ChatTeardropTextDuotone,
      fill: ChatTeardropTextFill,
      light: ChatTeardropTextLight,
      regular: ChatTeardropTextRegular,
      thin: ChatTeardropTextThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
