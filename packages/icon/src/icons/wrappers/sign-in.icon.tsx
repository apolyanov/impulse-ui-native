import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SignInBoldIcon } from "../bold/sign-in-bold.icon";
import { SignInDuotoneIcon } from "../duotone/sign-in-duotone.icon";
import { SignInFillIcon } from "../fill/sign-in-fill.icon";
import { SignInLightIcon } from "../light/sign-in-light.icon";
import { SignInRegularIcon } from "../regular/sign-in-regular.icon";
import { SignInThinIcon } from "../thin/sign-in-thin.icon";

export const SignInIcon = memo(function SignIn(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SignInBoldIcon,
      duotone: SignInDuotoneIcon,
      fill: SignInFillIcon,
      light: SignInLightIcon,
      regular: SignInRegularIcon,
      thin: SignInThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
