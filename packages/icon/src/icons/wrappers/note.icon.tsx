import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NoteBoldIcon } from "../bold/note-bold.icon";
import { NoteDuotoneIcon } from "../duotone/note-duotone.icon";
import { NoteFillIcon } from "../fill/note-fill.icon";
import { NoteLightIcon } from "../light/note-light.icon";
import { NoteRegularIcon } from "../regular/note-regular.icon";
import { NoteThinIcon } from "../thin/note-thin.icon";

export const NoteIcon = memo(function Note(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NoteBoldIcon,
      duotone: NoteDuotoneIcon,
      fill: NoteFillIcon,
      light: NoteLightIcon,
      regular: NoteRegularIcon,
      thin: NoteThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
