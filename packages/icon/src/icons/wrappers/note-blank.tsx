import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NoteBlankBold } from "../bold";
import { NoteBlankDuotone } from "../duotone";
import { NoteBlankFill } from "../fill";
import { NoteBlankLight } from "../light";
import { NoteBlankRegular } from "../regular";
import { NoteBlankThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NoteBlank = memo(function NoteBlank(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NoteBlankBold,
      duotone: NoteBlankDuotone,
      fill: NoteBlankFill,
      light: NoteBlankLight,
      regular: NoteBlankRegular,
      thin: NoteBlankThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
