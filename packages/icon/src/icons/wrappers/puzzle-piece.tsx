import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PuzzlePieceBold } from "../bold";
import { PuzzlePieceDuotone } from "../duotone";
import { PuzzlePieceFill } from "../fill";
import { PuzzlePieceLight } from "../light";
import { PuzzlePieceRegular } from "../regular";
import { PuzzlePieceThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PuzzlePiece = memo(function PuzzlePiece(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PuzzlePieceBold,
      duotone: PuzzlePieceDuotone,
      fill: PuzzlePieceFill,
      light: PuzzlePieceLight,
      regular: PuzzlePieceRegular,
      thin: PuzzlePieceThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
