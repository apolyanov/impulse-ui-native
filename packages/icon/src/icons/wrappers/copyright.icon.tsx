import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CopyrightBoldIcon } from "../bold/copyright-bold.icon";
import { CopyrightDuotoneIcon } from "../duotone/copyright-duotone.icon";
import { CopyrightFillIcon } from "../fill/copyright-fill.icon";
import { CopyrightLightIcon } from "../light/copyright-light.icon";
import { CopyrightRegularIcon } from "../regular/copyright-regular.icon";
import { CopyrightThinIcon } from "../thin/copyright-thin.icon";

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
