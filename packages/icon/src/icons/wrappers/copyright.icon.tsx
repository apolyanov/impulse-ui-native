import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CopyrightBoldIcon } from "../bold";
import { CopyrightDuotoneIcon } from "../duotone";
import { CopyrightFillIcon } from "../fill";
import { CopyrightLightIcon } from "../light";
import { CopyrightRegularIcon } from "../regular";
import { CopyrightThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CopyrightIcon = memo(function Copyright(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CopyrightBoldIcon,
      duotone: CopyrightDuotoneIcon,
      fill: CopyrightFillIcon,
      light: CopyrightLightIcon,
      regular: CopyrightRegularIcon,
      thin: CopyrightThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
