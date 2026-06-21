import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MusicNoteBoldIcon } from "../bold";
import { MusicNoteDuotoneIcon } from "../duotone";
import { MusicNoteFillIcon } from "../fill";
import { MusicNoteLightIcon } from "../light";
import { MusicNoteRegularIcon } from "../regular";
import { MusicNoteThinIcon } from "../thin";

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
