import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PencilBoldIcon } from "../bold/pencil-bold.icon";
import { PencilDuotoneIcon } from "../duotone/pencil-duotone.icon";
import { PencilFillIcon } from "../fill/pencil-fill.icon";
import { PencilLightIcon } from "../light/pencil-light.icon";
import { PencilRegularIcon } from "../regular/pencil-regular.icon";
import { PencilThinIcon } from "../thin/pencil-thin.icon";

export const PencilIcon = memo(function Pencil(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PencilBoldIcon,
      duotone: PencilDuotoneIcon,
      fill: PencilFillIcon,
      light: PencilLightIcon,
      regular: PencilRegularIcon,
      thin: PencilThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
