import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MusicNotesBoldIcon } from "../bold/music-notes-bold.icon";
import { MusicNotesDuotoneIcon } from "../duotone/music-notes-duotone.icon";
import { MusicNotesFillIcon } from "../fill/music-notes-fill.icon";
import { MusicNotesLightIcon } from "../light/music-notes-light.icon";
import { MusicNotesRegularIcon } from "../regular/music-notes-regular.icon";
import { MusicNotesThinIcon } from "../thin/music-notes-thin.icon";

export const MusicNotesIcon = memo(function MusicNotes(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MusicNotesBoldIcon,
      duotone: MusicNotesDuotoneIcon,
      fill: MusicNotesFillIcon,
      light: MusicNotesLightIcon,
      regular: MusicNotesRegularIcon,
      thin: MusicNotesThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
