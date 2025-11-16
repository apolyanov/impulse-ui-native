import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MusicNoteSimpleBold } from "../bold";
import { MusicNoteSimpleDuotone } from "../duotone";
import { MusicNoteSimpleFill } from "../fill";
import { MusicNoteSimpleLight } from "../light";
import { MusicNoteSimpleRegular } from "../regular";
import { MusicNoteSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MusicNoteSimple = memo(function MusicNoteSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MusicNoteSimpleBold,
      duotone: MusicNoteSimpleDuotone,
      fill: MusicNoteSimpleFill,
      light: MusicNoteSimpleLight,
      regular: MusicNoteSimpleRegular,
      thin: MusicNoteSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
