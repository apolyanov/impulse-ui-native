import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CatBoldIcon } from "../bold";
import { CatDuotoneIcon } from "../duotone";
import { CatFillIcon } from "../fill";
import { CatLightIcon } from "../light";
import { CatRegularIcon } from "../regular";
import { CatThinIcon } from "../thin";

export const CatIcon = memo(function Cat(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CatBoldIcon,
      duotone: CatDuotoneIcon,
      fill: CatFillIcon,
      light: CatLightIcon,
      regular: CatRegularIcon,
      thin: CatThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
