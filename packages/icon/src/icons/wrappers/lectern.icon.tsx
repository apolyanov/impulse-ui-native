import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LecternBoldIcon } from "../bold";
import { LecternDuotoneIcon } from "../duotone";
import { LecternFillIcon } from "../fill";
import { LecternLightIcon } from "../light";
import { LecternRegularIcon } from "../regular";
import { LecternThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const LecternIcon = memo(function Lectern(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LecternBoldIcon,
      duotone: LecternDuotoneIcon,
      fill: LecternFillIcon,
      light: LecternLightIcon,
      regular: LecternRegularIcon,
      thin: LecternThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
