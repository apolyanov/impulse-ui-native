import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SignInBold } from "../bold";
import { SignInDuotone } from "../duotone";
import { SignInFill } from "../fill";
import { SignInLight } from "../light";
import { SignInRegular } from "../regular";
import { SignInThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SignIn = memo(function SignIn(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SignInBold,
      duotone: SignInDuotone,
      fill: SignInFill,
      light: SignInLight,
      regular: SignInRegular,
      thin: SignInThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
