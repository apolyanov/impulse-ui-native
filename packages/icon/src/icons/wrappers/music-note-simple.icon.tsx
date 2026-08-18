import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MusicNoteSimpleBoldIcon } from "../bold/music-note-simple-bold.icon";
import { MusicNoteSimpleDuotoneIcon } from "../duotone/music-note-simple-duotone.icon";
import { MusicNoteSimpleFillIcon } from "../fill/music-note-simple-fill.icon";
import { MusicNoteSimpleLightIcon } from "../light/music-note-simple-light.icon";
import { MusicNoteSimpleRegularIcon } from "../regular/music-note-simple-regular.icon";
import { MusicNoteSimpleThinIcon } from "../thin/music-note-simple-thin.icon";

export const MusicNoteSimpleIcon = memo(function MusicNoteSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MusicNoteSimpleBoldIcon,
      duotone: MusicNoteSimpleDuotoneIcon,
      fill: MusicNoteSimpleFillIcon,
      light: MusicNoteSimpleLightIcon,
      regular: MusicNoteSimpleRegularIcon,
      thin: MusicNoteSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
