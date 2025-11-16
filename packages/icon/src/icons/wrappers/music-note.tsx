import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MusicNoteBold } from "../bold";
import { MusicNoteDuotone } from "../duotone";
import { MusicNoteFill } from "../fill";
import { MusicNoteLight } from "../light";
import { MusicNoteRegular } from "../regular";
import { MusicNoteThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MusicNote = memo(function MusicNote(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MusicNoteBold,
      duotone: MusicNoteDuotone,
      fill: MusicNoteFill,
      light: MusicNoteLight,
      regular: MusicNoteRegular,
      thin: MusicNoteThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
