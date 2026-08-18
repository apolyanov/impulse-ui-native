import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DotsNineBoldIcon } from "../bold/dots-nine-bold.icon";
import { DotsNineDuotoneIcon } from "../duotone/dots-nine-duotone.icon";
import { DotsNineFillIcon } from "../fill/dots-nine-fill.icon";
import { DotsNineLightIcon } from "../light/dots-nine-light.icon";
import { DotsNineRegularIcon } from "../regular/dots-nine-regular.icon";
import { DotsNineThinIcon } from "../thin/dots-nine-thin.icon";

export const DotsNineIcon = memo(function DotsNine(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DotsNineBoldIcon,
      duotone: DotsNineDuotoneIcon,
      fill: DotsNineFillIcon,
      light: DotsNineLightIcon,
      regular: DotsNineRegularIcon,
      thin: DotsNineThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
