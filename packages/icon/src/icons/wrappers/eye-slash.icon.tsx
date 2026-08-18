import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { EyeSlashBoldIcon } from "../bold/eye-slash-bold.icon";
import { EyeSlashDuotoneIcon } from "../duotone/eye-slash-duotone.icon";
import { EyeSlashFillIcon } from "../fill/eye-slash-fill.icon";
import { EyeSlashLightIcon } from "../light/eye-slash-light.icon";
import { EyeSlashRegularIcon } from "../regular/eye-slash-regular.icon";
import { EyeSlashThinIcon } from "../thin/eye-slash-thin.icon";

export const EyeSlashIcon = memo(function EyeSlash(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: EyeSlashBoldIcon,
      duotone: EyeSlashDuotoneIcon,
      fill: EyeSlashFillIcon,
      light: EyeSlashLightIcon,
      regular: EyeSlashRegularIcon,
      thin: EyeSlashThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
