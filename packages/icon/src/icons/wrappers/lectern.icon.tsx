import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { LecternBoldIcon } from "../bold/lectern-bold.icon";
import { LecternDuotoneIcon } from "../duotone/lectern-duotone.icon";
import { LecternFillIcon } from "../fill/lectern-fill.icon";
import { LecternLightIcon } from "../light/lectern-light.icon";
import { LecternRegularIcon } from "../regular/lectern-regular.icon";
import { LecternThinIcon } from "../thin/lectern-thin.icon";

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
