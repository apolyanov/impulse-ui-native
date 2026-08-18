import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PencilSimpleSlashBoldIcon } from "../bold/pencil-simple-slash-bold.icon";
import { PencilSimpleSlashDuotoneIcon } from "../duotone/pencil-simple-slash-duotone.icon";
import { PencilSimpleSlashFillIcon } from "../fill/pencil-simple-slash-fill.icon";
import { PencilSimpleSlashLightIcon } from "../light/pencil-simple-slash-light.icon";
import { PencilSimpleSlashRegularIcon } from "../regular/pencil-simple-slash-regular.icon";
import { PencilSimpleSlashThinIcon } from "../thin/pencil-simple-slash-thin.icon";

export const PencilSimpleSlashIcon = memo(function PencilSimpleSlash(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PencilSimpleSlashBoldIcon,
      duotone: PencilSimpleSlashDuotoneIcon,
      fill: PencilSimpleSlashFillIcon,
      light: PencilSimpleSlashLightIcon,
      regular: PencilSimpleSlashRegularIcon,
      thin: PencilSimpleSlashThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
