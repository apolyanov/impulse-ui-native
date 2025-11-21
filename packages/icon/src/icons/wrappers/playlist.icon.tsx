import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PlaylistBoldIcon } from "../bold";
import { PlaylistDuotoneIcon } from "../duotone";
import { PlaylistFillIcon } from "../fill";
import { PlaylistLightIcon } from "../light";
import { PlaylistRegularIcon } from "../regular";
import { PlaylistThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
