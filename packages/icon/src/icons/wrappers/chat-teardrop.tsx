import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ChatTeardropBold } from "../bold";
import { ChatTeardropDuotone } from "../duotone";
import { ChatTeardropFill } from "../fill";
import { ChatTeardropLight } from "../light";
import { ChatTeardropRegular } from "../regular";
import { ChatTeardropThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ChatTeardrop = memo(function ChatTeardrop(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChatTeardropBold,
      duotone: ChatTeardropDuotone,
      fill: ChatTeardropFill,
      light: ChatTeardropLight,
      regular: ChatTeardropRegular,
      thin: ChatTeardropThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
