import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { UserSoundBold } from "../bold";
import { UserSoundDuotone } from "../duotone";
import { UserSoundFill } from "../fill";
import { UserSoundLight } from "../light";
import { UserSoundRegular } from "../regular";
import { UserSoundThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const UserSound = memo(function UserSound(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UserSoundBold,
      duotone: UserSoundDuotone,
      fill: UserSoundFill,
      light: UserSoundLight,
      regular: UserSoundRegular,
      thin: UserSoundThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
