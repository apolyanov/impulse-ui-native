import { createIcon } from "../../hocs/create-icon.hoc";
import { CassetteTapeBoldIcon } from "../bold/cassette-tape-bold.icon";
import { CassetteTapeDuotoneIcon } from "../duotone/cassette-tape-duotone.icon";
import { CassetteTapeFillIcon } from "../fill/cassette-tape-fill.icon";
import { CassetteTapeLightIcon } from "../light/cassette-tape-light.icon";
import { CassetteTapeRegularIcon } from "../regular/cassette-tape-regular.icon";
import { CassetteTapeThinIcon } from "../thin/cassette-tape-thin.icon";

export const CassetteTapeIcon = createIcon("CassetteTape", {
  bold: CassetteTapeBoldIcon,
  duotone: CassetteTapeDuotoneIcon,
  fill: CassetteTapeFillIcon,
  light: CassetteTapeLightIcon,
  regular: CassetteTapeRegularIcon,
  thin: CassetteTapeThinIcon,
});
