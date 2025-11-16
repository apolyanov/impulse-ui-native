import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MusicNotesPlusBold } from "../bold";
import { MusicNotesPlusDuotone } from "../duotone";
import { MusicNotesPlusFill } from "../fill";
import { MusicNotesPlusLight } from "../light";
import { MusicNotesPlusRegular } from "../regular";
import { MusicNotesPlusThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MusicNotesPlus = memo(function MusicNotesPlus(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MusicNotesPlusBold,
      duotone: MusicNotesPlusDuotone,
      fill: MusicNotesPlusFill,
      light: MusicNotesPlusLight,
      regular: MusicNotesPlusRegular,
      thin: MusicNotesPlusThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
