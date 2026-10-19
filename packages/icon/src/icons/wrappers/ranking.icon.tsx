import { createIcon } from "../../hocs/create-icon.hoc";
import { RankingBoldIcon } from "../bold/ranking-bold.icon";
import { RankingDuotoneIcon } from "../duotone/ranking-duotone.icon";
import { RankingFillIcon } from "../fill/ranking-fill.icon";
import { RankingLightIcon } from "../light/ranking-light.icon";
import { RankingRegularIcon } from "../regular/ranking-regular.icon";
import { RankingThinIcon } from "../thin/ranking-thin.icon";

export const RankingIcon = createIcon("Ranking", {
  bold: RankingBoldIcon,
  duotone: RankingDuotoneIcon,
  fill: RankingFillIcon,
  light: RankingLightIcon,
  regular: RankingRegularIcon,
  thin: RankingThinIcon,
});
