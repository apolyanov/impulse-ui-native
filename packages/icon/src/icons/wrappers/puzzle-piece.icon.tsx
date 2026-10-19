import { createIcon } from "../../hocs/create-icon.hoc";
import { PuzzlePieceBoldIcon } from "../bold/puzzle-piece-bold.icon";
import { PuzzlePieceDuotoneIcon } from "../duotone/puzzle-piece-duotone.icon";
import { PuzzlePieceFillIcon } from "../fill/puzzle-piece-fill.icon";
import { PuzzlePieceLightIcon } from "../light/puzzle-piece-light.icon";
import { PuzzlePieceRegularIcon } from "../regular/puzzle-piece-regular.icon";
import { PuzzlePieceThinIcon } from "../thin/puzzle-piece-thin.icon";

export const PuzzlePieceIcon = createIcon("PuzzlePiece", {
  bold: PuzzlePieceBoldIcon,
  duotone: PuzzlePieceDuotoneIcon,
  fill: PuzzlePieceFillIcon,
  light: PuzzlePieceLightIcon,
  regular: PuzzlePieceRegularIcon,
  thin: PuzzlePieceThinIcon,
});
