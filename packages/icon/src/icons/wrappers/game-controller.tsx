import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GameControllerBold } from "../bold";
import { GameControllerDuotone } from "../duotone";
import { GameControllerFill } from "../fill";
import { GameControllerLight } from "../light";
import { GameControllerRegular } from "../regular";
import { GameControllerThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GameController = memo(function GameController(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GameControllerBold,
      duotone: GameControllerDuotone,
      fill: GameControllerFill,
      light: GameControllerLight,
      regular: GameControllerRegular,
      thin: GameControllerThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
