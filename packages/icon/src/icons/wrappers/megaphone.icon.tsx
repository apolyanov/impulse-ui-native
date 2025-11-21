import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MegaphoneBoldIcon } from "../bold";
import { MegaphoneDuotoneIcon } from "../duotone";
import { MegaphoneFillIcon } from "../fill";
import { MegaphoneLightIcon } from "../light";
import { MegaphoneRegularIcon } from "../regular";
import { MegaphoneThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
