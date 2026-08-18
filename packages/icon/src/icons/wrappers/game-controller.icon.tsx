import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GameControllerBoldIcon } from "../bold/game-controller-bold.icon";
import { GameControllerDuotoneIcon } from "../duotone/game-controller-duotone.icon";
import { GameControllerFillIcon } from "../fill/game-controller-fill.icon";
import { GameControllerLightIcon } from "../light/game-controller-light.icon";
import { GameControllerRegularIcon } from "../regular/game-controller-regular.icon";
import { GameControllerThinIcon } from "../thin/game-controller-thin.icon";

export const GameControllerIcon = memo(function GameController(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GameControllerBoldIcon,
      duotone: GameControllerDuotoneIcon,
      fill: GameControllerFillIcon,
      light: GameControllerLightIcon,
      regular: GameControllerRegularIcon,
      thin: GameControllerThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
