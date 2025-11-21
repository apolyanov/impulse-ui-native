import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PuzzlePieceBoldIcon } from "../bold";
import { PuzzlePieceDuotoneIcon } from "../duotone";
import { PuzzlePieceFillIcon } from "../fill";
import { PuzzlePieceLightIcon } from "../light";
import { PuzzlePieceRegularIcon } from "../regular";
import { PuzzlePieceThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PuzzlePieceIcon = memo(function PuzzlePiece(
  props: IconWrapperProps
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
