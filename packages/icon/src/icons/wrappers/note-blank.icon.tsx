import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NoteBlankBoldIcon } from "../bold/note-blank-bold.icon";
import { NoteBlankDuotoneIcon } from "../duotone/note-blank-duotone.icon";
import { NoteBlankFillIcon } from "../fill/note-blank-fill.icon";
import { NoteBlankLightIcon } from "../light/note-blank-light.icon";
import { NoteBlankRegularIcon } from "../regular/note-blank-regular.icon";
import { NoteBlankThinIcon } from "../thin/note-blank-thin.icon";

export const NoteBlankIcon = memo(function NoteBlank(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NoteBlankBoldIcon,
      duotone: NoteBlankDuotoneIcon,
      fill: NoteBlankFillIcon,
      light: NoteBlankLightIcon,
      regular: NoteBlankRegularIcon,
      thin: NoteBlankThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
