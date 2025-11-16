import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MusicNotesSimpleBold } from "../bold";
import { MusicNotesSimpleDuotone } from "../duotone";
import { MusicNotesSimpleFill } from "../fill";
import { MusicNotesSimpleLight } from "../light";
import { MusicNotesSimpleRegular } from "../regular";
import { MusicNotesSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MusicNotesSimple = memo(function MusicNotesSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MusicNotesSimpleBold,
      duotone: MusicNotesSimpleDuotone,
      fill: MusicNotesSimpleFill,
      light: MusicNotesSimpleLight,
      regular: MusicNotesSimpleRegular,
      thin: MusicNotesSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
