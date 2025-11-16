import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PasswordBold } from "../bold";
import { PasswordDuotone } from "../duotone";
import { PasswordFill } from "../fill";
import { PasswordLight } from "../light";
import { PasswordRegular } from "../regular";
import { PasswordThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Password = memo(function Password(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PasswordBold,
      duotone: PasswordDuotone,
      fill: PasswordFill,
      light: PasswordLight,
      regular: PasswordRegular,
      thin: PasswordThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
