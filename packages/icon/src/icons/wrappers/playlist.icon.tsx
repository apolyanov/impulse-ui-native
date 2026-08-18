import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PlaylistBoldIcon } from "../bold/playlist-bold.icon";
import { PlaylistDuotoneIcon } from "../duotone/playlist-duotone.icon";
import { PlaylistFillIcon } from "../fill/playlist-fill.icon";
import { PlaylistLightIcon } from "../light/playlist-light.icon";
import { PlaylistRegularIcon } from "../regular/playlist-regular.icon";
import { PlaylistThinIcon } from "../thin/playlist-thin.icon";

export const PlaylistIcon = memo(function Playlist(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PlaylistBoldIcon,
      duotone: PlaylistDuotoneIcon,
      fill: PlaylistFillIcon,
      light: PlaylistLightIcon,
      regular: PlaylistRegularIcon,
      thin: PlaylistThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
