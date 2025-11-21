import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DotsNineBoldIcon } from "../bold";
import { DotsNineDuotoneIcon } from "../duotone";
import { DotsNineFillIcon } from "../fill";
import { DotsNineLightIcon } from "../light";
import { DotsNineRegularIcon } from "../regular";
import { DotsNineThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
