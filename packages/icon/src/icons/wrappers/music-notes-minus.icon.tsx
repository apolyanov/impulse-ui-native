import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MusicNotesMinusBoldIcon } from "../bold/music-notes-minus-bold.icon";
import { MusicNotesMinusDuotoneIcon } from "../duotone/music-notes-minus-duotone.icon";
import { MusicNotesMinusFillIcon } from "../fill/music-notes-minus-fill.icon";
import { MusicNotesMinusLightIcon } from "../light/music-notes-minus-light.icon";
import { MusicNotesMinusRegularIcon } from "../regular/music-notes-minus-regular.icon";
import { MusicNotesMinusThinIcon } from "../thin/music-notes-minus-thin.icon";

export const MusicNotesMinusIcon = memo(function MusicNotesMinus(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MusicNotesMinusBoldIcon,
      duotone: MusicNotesMinusDuotoneIcon,
      fill: MusicNotesMinusFillIcon,
      light: MusicNotesMinusLightIcon,
      regular: MusicNotesMinusRegularIcon,
      thin: MusicNotesMinusThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
