import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NotepadBold } from "../bold";
import { NotepadDuotone } from "../duotone";
import { NotepadFill } from "../fill";
import { NotepadLight } from "../light";
import { NotepadRegular } from "../regular";
import { NotepadThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Notepad = memo(function Notepad(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NotepadBold,
      duotone: NotepadDuotone,
      fill: NotepadFill,
      light: NotepadLight,
      regular: NotepadRegular,
      thin: NotepadThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
