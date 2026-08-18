import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PhoneSlashBoldIcon } from "../bold/phone-slash-bold.icon";
import { PhoneSlashDuotoneIcon } from "../duotone/phone-slash-duotone.icon";
import { PhoneSlashFillIcon } from "../fill/phone-slash-fill.icon";
import { PhoneSlashLightIcon } from "../light/phone-slash-light.icon";
import { PhoneSlashRegularIcon } from "../regular/phone-slash-regular.icon";
import { PhoneSlashThinIcon } from "../thin/phone-slash-thin.icon";

export const PhoneSlashIcon = memo(function PhoneSlash(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PhoneSlashBoldIcon,
      duotone: PhoneSlashDuotoneIcon,
      fill: PhoneSlashFillIcon,
      light: PhoneSlashLightIcon,
      regular: PhoneSlashRegularIcon,
      thin: PhoneSlashThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
