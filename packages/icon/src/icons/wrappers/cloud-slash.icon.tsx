import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CloudSlashBoldIcon } from "../bold/cloud-slash-bold.icon";
import { CloudSlashDuotoneIcon } from "../duotone/cloud-slash-duotone.icon";
import { CloudSlashFillIcon } from "../fill/cloud-slash-fill.icon";
import { CloudSlashLightIcon } from "../light/cloud-slash-light.icon";
import { CloudSlashRegularIcon } from "../regular/cloud-slash-regular.icon";
import { CloudSlashThinIcon } from "../thin/cloud-slash-thin.icon";

export const CloudSlashIcon = memo(function CloudSlash(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CloudSlashBoldIcon,
      duotone: CloudSlashDuotoneIcon,
      fill: CloudSlashFillIcon,
      light: CloudSlashLightIcon,
      regular: CloudSlashRegularIcon,
      thin: CloudSlashThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
