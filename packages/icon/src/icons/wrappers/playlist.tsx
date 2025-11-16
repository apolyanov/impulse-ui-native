import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PlaylistBold } from "../bold";
import { PlaylistDuotone } from "../duotone";
import { PlaylistFill } from "../fill";
import { PlaylistLight } from "../light";
import { PlaylistRegular } from "../regular";
import { PlaylistThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Playlist = memo(function Playlist(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PlaylistBold,
      duotone: PlaylistDuotone,
      fill: PlaylistFill,
      light: PlaylistLight,
      regular: PlaylistRegular,
      thin: PlaylistThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
