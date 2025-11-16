import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LecternBold } from "../bold";
import { LecternDuotone } from "../duotone";
import { LecternFill } from "../fill";
import { LecternLight } from "../light";
import { LecternRegular } from "../regular";
import { LecternThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Lectern = memo(function Lectern(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LecternBold,
      duotone: LecternDuotone,
      fill: LecternFill,
      light: LecternLight,
      regular: LecternRegular,
      thin: LecternThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
