import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MusicNoteSimpleBoldIcon } from "../bold";
import { MusicNoteSimpleDuotoneIcon } from "../duotone";
import { MusicNoteSimpleFillIcon } from "../fill";
import { MusicNoteSimpleLightIcon } from "../light";
import { MusicNoteSimpleRegularIcon } from "../regular";
import { MusicNoteSimpleThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MusicNoteSimpleIcon = memo(function MusicNoteSimple(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MusicNoteSimpleBoldIcon,
      duotone: MusicNoteSimpleDuotoneIcon,
      fill: MusicNoteSimpleFillIcon,
      light: MusicNoteSimpleLightIcon,
      regular: MusicNoteSimpleRegularIcon,
      thin: MusicNoteSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
