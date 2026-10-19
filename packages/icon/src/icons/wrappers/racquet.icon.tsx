import { createIcon } from "../../hocs/create-icon.hoc";
import { RacquetBoldIcon } from "../bold/racquet-bold.icon";
import { RacquetDuotoneIcon } from "../duotone/racquet-duotone.icon";
import { RacquetFillIcon } from "../fill/racquet-fill.icon";
import { RacquetLightIcon } from "../light/racquet-light.icon";
import { RacquetRegularIcon } from "../regular/racquet-regular.icon";
import { RacquetThinIcon } from "../thin/racquet-thin.icon";

export const RacquetIcon = createIcon("Racquet", {
  bold: RacquetBoldIcon,
  duotone: RacquetDuotoneIcon,
  fill: RacquetFillIcon,
  light: RacquetLightIcon,
  regular: RacquetRegularIcon,
  thin: RacquetThinIcon,
});
