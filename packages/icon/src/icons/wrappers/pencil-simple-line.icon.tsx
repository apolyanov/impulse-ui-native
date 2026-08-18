import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PencilSimpleLineBoldIcon } from "../bold/pencil-simple-line-bold.icon";
import { PencilSimpleLineDuotoneIcon } from "../duotone/pencil-simple-line-duotone.icon";
import { PencilSimpleLineFillIcon } from "../fill/pencil-simple-line-fill.icon";
import { PencilSimpleLineLightIcon } from "../light/pencil-simple-line-light.icon";
import { PencilSimpleLineRegularIcon } from "../regular/pencil-simple-line-regular.icon";
import { PencilSimpleLineThinIcon } from "../thin/pencil-simple-line-thin.icon";

export const PencilSimpleLineIcon = memo(function PencilSimpleLine(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PencilSimpleLineBoldIcon,
      duotone: PencilSimpleLineDuotoneIcon,
      fill: PencilSimpleLineFillIcon,
      light: PencilSimpleLineLightIcon,
      regular: PencilSimpleLineRegularIcon,
      thin: PencilSimpleLineThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
