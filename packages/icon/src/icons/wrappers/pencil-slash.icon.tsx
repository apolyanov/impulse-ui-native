import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PencilSlashBoldIcon } from "../bold/pencil-slash-bold.icon";
import { PencilSlashDuotoneIcon } from "../duotone/pencil-slash-duotone.icon";
import { PencilSlashFillIcon } from "../fill/pencil-slash-fill.icon";
import { PencilSlashLightIcon } from "../light/pencil-slash-light.icon";
import { PencilSlashRegularIcon } from "../regular/pencil-slash-regular.icon";
import { PencilSlashThinIcon } from "../thin/pencil-slash-thin.icon";

export const PencilSlashIcon = memo(function PencilSlash(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PencilSlashBoldIcon,
      duotone: PencilSlashDuotoneIcon,
      fill: PencilSlashFillIcon,
      light: PencilSlashLightIcon,
      regular: PencilSlashRegularIcon,
      thin: PencilSlashThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
