import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CatBold } from "../bold";
import { CatDuotone } from "../duotone";
import { CatFill } from "../fill";
import { CatLight } from "../light";
import { CatRegular } from "../regular";
import { CatThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Cat = memo(function Cat(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CatBold,
      duotone: CatDuotone,
      fill: CatFill,
      light: CatLight,
      regular: CatRegular,
      thin: CatThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
