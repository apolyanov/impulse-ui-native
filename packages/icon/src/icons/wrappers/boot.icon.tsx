import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BootBoldIcon } from "../bold/boot-bold.icon";
import { BootDuotoneIcon } from "../duotone/boot-duotone.icon";
import { BootFillIcon } from "../fill/boot-fill.icon";
import { BootLightIcon } from "../light/boot-light.icon";
import { BootRegularIcon } from "../regular/boot-regular.icon";
import { BootThinIcon } from "../thin/boot-thin.icon";

export const BootIcon = memo(function Boot(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BootBoldIcon,
      duotone: BootDuotoneIcon,
      fill: BootFillIcon,
      light: BootLightIcon,
      regular: BootRegularIcon,
      thin: BootThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
