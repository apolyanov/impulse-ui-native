import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PasswordBoldIcon } from "../bold/password-bold.icon";
import { PasswordDuotoneIcon } from "../duotone/password-duotone.icon";
import { PasswordFillIcon } from "../fill/password-fill.icon";
import { PasswordLightIcon } from "../light/password-light.icon";
import { PasswordRegularIcon } from "../regular/password-regular.icon";
import { PasswordThinIcon } from "../thin/password-thin.icon";

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
