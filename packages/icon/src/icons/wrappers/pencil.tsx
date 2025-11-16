import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PencilBold } from "../bold";
import { PencilDuotone } from "../duotone";
import { PencilFill } from "../fill";
import { PencilLight } from "../light";
import { PencilRegular } from "../regular";
import { PencilThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Pencil = memo(function Pencil(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PencilBold,
      duotone: PencilDuotone,
      fill: PencilFill,
      light: PencilLight,
      regular: PencilRegular,
      thin: PencilThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
