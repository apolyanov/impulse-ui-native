import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { EarSlashBoldIcon } from "../bold/ear-slash-bold.icon";
import { EarSlashDuotoneIcon } from "../duotone/ear-slash-duotone.icon";
import { EarSlashFillIcon } from "../fill/ear-slash-fill.icon";
import { EarSlashLightIcon } from "../light/ear-slash-light.icon";
import { EarSlashRegularIcon } from "../regular/ear-slash-regular.icon";
import { EarSlashThinIcon } from "../thin/ear-slash-thin.icon";

export const EarSlashIcon = memo(function EarSlash(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: EarSlashBoldIcon,
      duotone: EarSlashDuotoneIcon,
      fill: EarSlashFillIcon,
      light: EarSlashLightIcon,
      regular: EarSlashRegularIcon,
      thin: EarSlashThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
