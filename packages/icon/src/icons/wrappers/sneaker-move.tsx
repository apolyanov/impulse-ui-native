import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SneakerMoveBold } from "../bold";
import { SneakerMoveDuotone } from "../duotone";
import { SneakerMoveFill } from "../fill";
import { SneakerMoveLight } from "../light";
import { SneakerMoveRegular } from "../regular";
import { SneakerMoveThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SneakerMove = memo(function SneakerMove(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SneakerMoveBold,
      duotone: SneakerMoveDuotone,
      fill: SneakerMoveFill,
      light: SneakerMoveLight,
      regular: SneakerMoveRegular,
      thin: SneakerMoveThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
