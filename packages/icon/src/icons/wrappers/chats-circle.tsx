import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ChatsCircleBold } from "../bold";
import { ChatsCircleDuotone } from "../duotone";
import { ChatsCircleFill } from "../fill";
import { ChatsCircleLight } from "../light";
import { ChatsCircleRegular } from "../regular";
import { ChatsCircleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ChatsCircle = memo(function ChatsCircle(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChatsCircleBold,
      duotone: ChatsCircleDuotone,
      fill: ChatsCircleFill,
      light: ChatsCircleLight,
      regular: ChatsCircleRegular,
      thin: ChatsCircleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
