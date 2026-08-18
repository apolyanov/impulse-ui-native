import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PencilLineBoldIcon } from "../bold/pencil-line-bold.icon";
import { PencilLineDuotoneIcon } from "../duotone/pencil-line-duotone.icon";
import { PencilLineFillIcon } from "../fill/pencil-line-fill.icon";
import { PencilLineLightIcon } from "../light/pencil-line-light.icon";
import { PencilLineRegularIcon } from "../regular/pencil-line-regular.icon";
import { PencilLineThinIcon } from "../thin/pencil-line-thin.icon";

export const PencilLineIcon = memo(function PencilLine(
  props: IconWrapperProps,
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
