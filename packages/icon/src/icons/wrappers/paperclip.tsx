import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PaperclipBold } from "../bold";
import { PaperclipDuotone } from "../duotone";
import { PaperclipFill } from "../fill";
import { PaperclipLight } from "../light";
import { PaperclipRegular } from "../regular";
import { PaperclipThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Paperclip = memo(function Paperclip(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PaperclipBold,
      duotone: PaperclipDuotone,
      fill: PaperclipFill,
      light: PaperclipLight,
      regular: PaperclipRegular,
      thin: PaperclipThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
