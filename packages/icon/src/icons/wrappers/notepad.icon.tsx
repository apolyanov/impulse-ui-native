import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NotepadBoldIcon } from "../bold/notepad-bold.icon";
import { NotepadDuotoneIcon } from "../duotone/notepad-duotone.icon";
import { NotepadFillIcon } from "../fill/notepad-fill.icon";
import { NotepadLightIcon } from "../light/notepad-light.icon";
import { NotepadRegularIcon } from "../regular/notepad-regular.icon";
import { NotepadThinIcon } from "../thin/notepad-thin.icon";

export const NotepadIcon = memo(function Notepad(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NotepadBoldIcon,
      duotone: NotepadDuotoneIcon,
      fill: NotepadFillIcon,
      light: NotepadLightIcon,
      regular: NotepadRegularIcon,
      thin: NotepadThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
