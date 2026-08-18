import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { UserSoundBoldIcon } from "../bold/user-sound-bold.icon";
import { UserSoundDuotoneIcon } from "../duotone/user-sound-duotone.icon";
import { UserSoundFillIcon } from "../fill/user-sound-fill.icon";
import { UserSoundLightIcon } from "../light/user-sound-light.icon";
import { UserSoundRegularIcon } from "../regular/user-sound-regular.icon";
import { UserSoundThinIcon } from "../thin/user-sound-thin.icon";

export const UserSoundIcon = memo(function UserSound(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UserSoundBoldIcon,
      duotone: UserSoundDuotoneIcon,
      fill: UserSoundFillIcon,
      light: UserSoundLightIcon,
      regular: UserSoundRegularIcon,
      thin: UserSoundThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
