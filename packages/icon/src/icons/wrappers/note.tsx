import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NoteBold } from "../bold";
import { NoteDuotone } from "../duotone";
import { NoteFill } from "../fill";
import { NoteLight } from "../light";
import { NoteRegular } from "../regular";
import { NoteThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Note = memo(function Note(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NoteBold,
      duotone: NoteDuotone,
      fill: NoteFill,
      light: NoteLight,
      regular: NoteRegular,
      thin: NoteThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
