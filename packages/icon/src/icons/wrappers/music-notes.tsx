import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MusicNotesBold } from "../bold";
import { MusicNotesDuotone } from "../duotone";
import { MusicNotesFill } from "../fill";
import { MusicNotesLight } from "../light";
import { MusicNotesRegular } from "../regular";
import { MusicNotesThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MusicNotes = memo(function MusicNotes(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MusicNotesBold,
      duotone: MusicNotesDuotone,
      fill: MusicNotesFill,
      light: MusicNotesLight,
      regular: MusicNotesRegular,
      thin: MusicNotesThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
