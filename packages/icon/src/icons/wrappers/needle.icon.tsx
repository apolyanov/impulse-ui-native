import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NeedleBoldIcon } from "../bold/needle-bold.icon";
import { NeedleDuotoneIcon } from "../duotone/needle-duotone.icon";
import { NeedleFillIcon } from "../fill/needle-fill.icon";
import { NeedleLightIcon } from "../light/needle-light.icon";
import { NeedleRegularIcon } from "../regular/needle-regular.icon";
import { NeedleThinIcon } from "../thin/needle-thin.icon";

export const NeedleIcon = memo(function Needle(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NeedleBoldIcon,
      duotone: NeedleDuotoneIcon,
      fill: NeedleFillIcon,
      light: NeedleLightIcon,
      regular: NeedleRegularIcon,
      thin: NeedleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
