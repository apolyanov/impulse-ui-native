import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MusicNotesPlusBoldIcon } from "../bold";
import { MusicNotesPlusDuotoneIcon } from "../duotone";
import { MusicNotesPlusFillIcon } from "../fill";
import { MusicNotesPlusLightIcon } from "../light";
import { MusicNotesPlusRegularIcon } from "../regular";
import { MusicNotesPlusThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MusicNotesPlusIcon = memo(function MusicNotesPlus(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MusicNotesPlusBoldIcon,
      duotone: MusicNotesPlusDuotoneIcon,
      fill: MusicNotesPlusFillIcon,
      light: MusicNotesPlusLightIcon,
      regular: MusicNotesPlusRegularIcon,
      thin: MusicNotesPlusThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
