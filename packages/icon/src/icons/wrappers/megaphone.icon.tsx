import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MegaphoneBoldIcon } from "../bold/megaphone-bold.icon";
import { MegaphoneDuotoneIcon } from "../duotone/megaphone-duotone.icon";
import { MegaphoneFillIcon } from "../fill/megaphone-fill.icon";
import { MegaphoneLightIcon } from "../light/megaphone-light.icon";
import { MegaphoneRegularIcon } from "../regular/megaphone-regular.icon";
import { MegaphoneThinIcon } from "../thin/megaphone-thin.icon";

export const MegaphoneIcon = memo(function Megaphone(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MegaphoneBoldIcon,
      duotone: MegaphoneDuotoneIcon,
      fill: MegaphoneFillIcon,
      light: MegaphoneLightIcon,
      regular: MegaphoneRegularIcon,
      thin: MegaphoneThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
