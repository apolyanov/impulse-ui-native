import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NoteBlankBoldIcon } from "../bold";
import { NoteBlankDuotoneIcon } from "../duotone";
import { NoteBlankFillIcon } from "../fill";
import { NoteBlankLightIcon } from "../light";
import { NoteBlankRegularIcon } from "../regular";
import { NoteBlankThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
