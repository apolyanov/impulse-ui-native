import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PencilLineBoldIcon } from "../bold";
import { PencilLineDuotoneIcon } from "../duotone";
import { PencilLineFillIcon } from "../fill";
import { PencilLineLightIcon } from "../light";
import { PencilLineRegularIcon } from "../regular";
import { PencilLineThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PencilLineIcon = memo(function PencilLine(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PencilLineBoldIcon,
      duotone: PencilLineDuotoneIcon,
      fill: PencilLineFillIcon,
      light: PencilLineLightIcon,
      regular: PencilLineRegularIcon,
      thin: PencilLineThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
