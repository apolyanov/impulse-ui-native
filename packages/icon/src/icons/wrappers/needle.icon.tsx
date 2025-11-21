import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NeedleBoldIcon } from "../bold";
import { NeedleDuotoneIcon } from "../duotone";
import { NeedleFillIcon } from "../fill";
import { NeedleLightIcon } from "../light";
import { NeedleRegularIcon } from "../regular";
import { NeedleThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
