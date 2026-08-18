import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PuzzlePieceBoldIcon } from "../bold/puzzle-piece-bold.icon";
import { PuzzlePieceDuotoneIcon } from "../duotone/puzzle-piece-duotone.icon";
import { PuzzlePieceFillIcon } from "../fill/puzzle-piece-fill.icon";
import { PuzzlePieceLightIcon } from "../light/puzzle-piece-light.icon";
import { PuzzlePieceRegularIcon } from "../regular/puzzle-piece-regular.icon";
import { PuzzlePieceThinIcon } from "../thin/puzzle-piece-thin.icon";

export const PuzzlePieceIcon = memo(function PuzzlePiece(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PuzzlePieceBoldIcon,
      duotone: PuzzlePieceDuotoneIcon,
      fill: PuzzlePieceFillIcon,
      light: PuzzlePieceLightIcon,
      regular: PuzzlePieceRegularIcon,
      thin: PuzzlePieceThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
