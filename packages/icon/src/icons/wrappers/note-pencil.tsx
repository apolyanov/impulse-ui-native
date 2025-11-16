import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NotePencilBold } from "../bold";
import { NotePencilDuotone } from "../duotone";
import { NotePencilFill } from "../fill";
import { NotePencilLight } from "../light";
import { NotePencilRegular } from "../regular";
import { NotePencilThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NotePencil = memo(function NotePencil(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NotePencilBold,
      duotone: NotePencilDuotone,
      fill: NotePencilFill,
      light: NotePencilLight,
      regular: NotePencilRegular,
      thin: NotePencilThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
