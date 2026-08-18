import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MusicNoteBoldIcon } from "../bold/music-note-bold.icon";
import { MusicNoteDuotoneIcon } from "../duotone/music-note-duotone.icon";
import { MusicNoteFillIcon } from "../fill/music-note-fill.icon";
import { MusicNoteLightIcon } from "../light/music-note-light.icon";
import { MusicNoteRegularIcon } from "../regular/music-note-regular.icon";
import { MusicNoteThinIcon } from "../thin/music-note-thin.icon";

export const MusicNoteIcon = memo(function MusicNote(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MusicNoteBoldIcon,
      duotone: MusicNoteDuotoneIcon,
      fill: MusicNoteFillIcon,
      light: MusicNoteLightIcon,
      regular: MusicNoteRegularIcon,
      thin: MusicNoteThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
