import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SignOutBoldIcon } from "../bold";
import { SignOutDuotoneIcon } from "../duotone";
import { SignOutFillIcon } from "../fill";
import { SignOutLightIcon } from "../light";
import { SignOutRegularIcon } from "../regular";
import { SignOutThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
