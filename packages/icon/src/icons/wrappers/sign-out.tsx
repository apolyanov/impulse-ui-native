import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SignOutBold } from "../bold";
import { SignOutDuotone } from "../duotone";
import { SignOutFill } from "../fill";
import { SignOutLight } from "../light";
import { SignOutRegular } from "../regular";
import { SignOutThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SignOut = memo(function SignOut(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SignOutBold,
      duotone: SignOutDuotone,
      fill: SignOutFill,
      light: SignOutLight,
      regular: SignOutRegular,
      thin: SignOutThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
