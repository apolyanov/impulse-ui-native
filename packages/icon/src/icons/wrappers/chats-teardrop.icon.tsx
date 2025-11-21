import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ChatsTeardropBoldIcon } from "../bold";
import { ChatsTeardropDuotoneIcon } from "../duotone";
import { ChatsTeardropFillIcon } from "../fill";
import { ChatsTeardropLightIcon } from "../light";
import { ChatsTeardropRegularIcon } from "../regular";
import { ChatsTeardropThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ChatsTeardropIcon = memo(function ChatsTeardrop(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChatsTeardropBoldIcon,
      duotone: ChatsTeardropDuotoneIcon,
      fill: ChatsTeardropFillIcon,
      light: ChatsTeardropLightIcon,
      regular: ChatsTeardropRegularIcon,
      thin: ChatsTeardropThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
