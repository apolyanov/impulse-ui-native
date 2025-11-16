import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BootBold } from "../bold";
import { BootDuotone } from "../duotone";
import { BootFill } from "../fill";
import { BootLight } from "../light";
import { BootRegular } from "../regular";
import { BootThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Boot = memo(function Boot(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BootBold,
      duotone: BootDuotone,
      fill: BootFill,
      light: BootLight,
      regular: BootRegular,
      thin: BootThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
