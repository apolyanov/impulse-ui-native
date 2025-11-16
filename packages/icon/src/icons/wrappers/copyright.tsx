import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CopyrightBold } from "../bold";
import { CopyrightDuotone } from "../duotone";
import { CopyrightFill } from "../fill";
import { CopyrightLight } from "../light";
import { CopyrightRegular } from "../regular";
import { CopyrightThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Copyright = memo(function Copyright(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CopyrightBold,
      duotone: CopyrightDuotone,
      fill: CopyrightFill,
      light: CopyrightLight,
      regular: CopyrightRegular,
      thin: CopyrightThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
