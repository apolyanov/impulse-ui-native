import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ChatsTeardropBold } from "../bold";
import { ChatsTeardropDuotone } from "../duotone";
import { ChatsTeardropFill } from "../fill";
import { ChatsTeardropLight } from "../light";
import { ChatsTeardropRegular } from "../regular";
import { ChatsTeardropThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ChatsTeardrop = memo(function ChatsTeardrop(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChatsTeardropBold,
      duotone: ChatsTeardropDuotone,
      fill: ChatsTeardropFill,
      light: ChatsTeardropLight,
      regular: ChatsTeardropRegular,
      thin: ChatsTeardropThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
