import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PhoneSlashBold } from "../bold";
import { PhoneSlashDuotone } from "../duotone";
import { PhoneSlashFill } from "../fill";
import { PhoneSlashLight } from "../light";
import { PhoneSlashRegular } from "../regular";
import { PhoneSlashThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PhoneSlash = memo(function PhoneSlash(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PhoneSlashBold,
      duotone: PhoneSlashDuotone,
      fill: PhoneSlashFill,
      light: PhoneSlashLight,
      regular: PhoneSlashRegular,
      thin: PhoneSlashThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
