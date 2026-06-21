import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BootBoldIcon } from "../bold";
import { BootDuotoneIcon } from "../duotone";
import { BootFillIcon } from "../fill";
import { BootLightIcon } from "../light";
import { BootRegularIcon } from "../regular";
import { BootThinIcon } from "../thin";

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
