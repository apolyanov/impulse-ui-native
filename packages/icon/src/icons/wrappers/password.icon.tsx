import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PasswordBoldIcon } from "../bold";
import { PasswordDuotoneIcon } from "../duotone";
import { PasswordFillIcon } from "../fill";
import { PasswordLightIcon } from "../light";
import { PasswordRegularIcon } from "../regular";
import { PasswordThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PasswordIcon = memo(function Password(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PasswordBoldIcon,
      duotone: PasswordDuotoneIcon,
      fill: PasswordFillIcon,
      light: PasswordLightIcon,
      regular: PasswordRegularIcon,
      thin: PasswordThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
