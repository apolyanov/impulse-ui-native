import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NotePencilBoldIcon } from "../bold";
import { NotePencilDuotoneIcon } from "../duotone";
import { NotePencilFillIcon } from "../fill";
import { NotePencilLightIcon } from "../light";
import { NotePencilRegularIcon } from "../regular";
import { NotePencilThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NotePencilIcon = memo(function NotePencil(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NotePencilBoldIcon,
      duotone: NotePencilDuotoneIcon,
      fill: NotePencilFillIcon,
      light: NotePencilLightIcon,
      regular: NotePencilRegularIcon,
      thin: NotePencilThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
