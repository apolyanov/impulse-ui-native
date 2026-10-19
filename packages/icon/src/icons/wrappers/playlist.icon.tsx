import { createIcon } from "../../hocs/create-icon.hoc";
import { PlaylistBoldIcon } from "../bold/playlist-bold.icon";
import { PlaylistDuotoneIcon } from "../duotone/playlist-duotone.icon";
import { PlaylistFillIcon } from "../fill/playlist-fill.icon";
import { PlaylistLightIcon } from "../light/playlist-light.icon";
import { PlaylistRegularIcon } from "../regular/playlist-regular.icon";
import { PlaylistThinIcon } from "../thin/playlist-thin.icon";

export const PlaylistIcon = createIcon("Playlist", {
  bold: PlaylistBoldIcon,
  duotone: PlaylistDuotoneIcon,
  fill: PlaylistFillIcon,
  light: PlaylistLightIcon,
  regular: PlaylistRegularIcon,
  thin: PlaylistThinIcon,
});
