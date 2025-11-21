import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ChatTeardropBoldIcon } from "../bold";
import { ChatTeardropDuotoneIcon } from "../duotone";
import { ChatTeardropFillIcon } from "../fill";
import { ChatTeardropLightIcon } from "../light";
import { ChatTeardropRegularIcon } from "../regular";
import { ChatTeardropThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ChatTeardropIcon = memo(function ChatTeardrop(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChatTeardropBoldIcon,
      duotone: ChatTeardropDuotoneIcon,
      fill: ChatTeardropFillIcon,
      light: ChatTeardropLightIcon,
      regular: ChatTeardropRegularIcon,
      thin: ChatTeardropThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
