import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MartiniBoldIcon } from "../bold";
import { MartiniDuotoneIcon } from "../duotone";
import { MartiniFillIcon } from "../fill";
import { MartiniLightIcon } from "../light";
import { MartiniRegularIcon } from "../regular";
import { MartiniThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MartiniIcon = memo(function Martini(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MartiniBoldIcon,
      duotone: MartiniDuotoneIcon,
      fill: MartiniFillIcon,
      light: MartiniLightIcon,
      regular: MartiniRegularIcon,
      thin: MartiniThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
