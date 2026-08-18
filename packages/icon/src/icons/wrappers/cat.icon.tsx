import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CatBoldIcon } from "../bold/cat-bold.icon";
import { CatDuotoneIcon } from "../duotone/cat-duotone.icon";
import { CatFillIcon } from "../fill/cat-fill.icon";
import { CatLightIcon } from "../light/cat-light.icon";
import { CatRegularIcon } from "../regular/cat-regular.icon";
import { CatThinIcon } from "../thin/cat-thin.icon";

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
