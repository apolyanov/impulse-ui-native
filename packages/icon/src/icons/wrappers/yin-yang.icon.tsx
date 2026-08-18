import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { YinYangBoldIcon } from "../bold/yin-yang-bold.icon";
import { YinYangDuotoneIcon } from "../duotone/yin-yang-duotone.icon";
import { YinYangFillIcon } from "../fill/yin-yang-fill.icon";
import { YinYangLightIcon } from "../light/yin-yang-light.icon";
import { YinYangRegularIcon } from "../regular/yin-yang-regular.icon";
import { YinYangThinIcon } from "../thin/yin-yang-thin.icon";

export const YinYangIcon = memo(function YinYang(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: YinYangBoldIcon,
      duotone: YinYangDuotoneIcon,
      fill: YinYangFillIcon,
      light: YinYangLightIcon,
      regular: YinYangRegularIcon,
      thin: YinYangThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
