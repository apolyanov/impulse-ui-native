import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MusicNotesMinusBold } from "../bold";
import { MusicNotesMinusDuotone } from "../duotone";
import { MusicNotesMinusFill } from "../fill";
import { MusicNotesMinusLight } from "../light";
import { MusicNotesMinusRegular } from "../regular";
import { MusicNotesMinusThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MusicNotesMinus = memo(function MusicNotesMinus(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MusicNotesMinusBold,
      duotone: MusicNotesMinusDuotone,
      fill: MusicNotesMinusFill,
      light: MusicNotesMinusLight,
      regular: MusicNotesMinusRegular,
      thin: MusicNotesMinusThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
