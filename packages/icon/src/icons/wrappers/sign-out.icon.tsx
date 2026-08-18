import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SignOutBoldIcon } from "../bold/sign-out-bold.icon";
import { SignOutDuotoneIcon } from "../duotone/sign-out-duotone.icon";
import { SignOutFillIcon } from "../fill/sign-out-fill.icon";
import { SignOutLightIcon } from "../light/sign-out-light.icon";
import { SignOutRegularIcon } from "../regular/sign-out-regular.icon";
import { SignOutThinIcon } from "../thin/sign-out-thin.icon";

export const SignOutIcon = memo(function SignOut(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SignOutBoldIcon,
      duotone: SignOutDuotoneIcon,
      fill: SignOutFillIcon,
      light: SignOutLightIcon,
      regular: SignOutRegularIcon,
      thin: SignOutThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
