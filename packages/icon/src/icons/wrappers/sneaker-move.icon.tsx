import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SneakerMoveBoldIcon } from "../bold/sneaker-move-bold.icon";
import { SneakerMoveDuotoneIcon } from "../duotone/sneaker-move-duotone.icon";
import { SneakerMoveFillIcon } from "../fill/sneaker-move-fill.icon";
import { SneakerMoveLightIcon } from "../light/sneaker-move-light.icon";
import { SneakerMoveRegularIcon } from "../regular/sneaker-move-regular.icon";
import { SneakerMoveThinIcon } from "../thin/sneaker-move-thin.icon";

export const SneakerMoveIcon = memo(function SneakerMove(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SneakerMoveBoldIcon,
      duotone: SneakerMoveDuotoneIcon,
      fill: SneakerMoveFillIcon,
      light: SneakerMoveLightIcon,
      regular: SneakerMoveRegularIcon,
      thin: SneakerMoveThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
