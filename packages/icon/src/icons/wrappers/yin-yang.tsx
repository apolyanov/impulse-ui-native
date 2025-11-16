import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { YinYangBold } from "../bold";
import { YinYangDuotone } from "../duotone";
import { YinYangFill } from "../fill";
import { YinYangLight } from "../light";
import { YinYangRegular } from "../regular";
import { YinYangThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const YinYang = memo(function YinYang(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: YinYangBold,
      duotone: YinYangDuotone,
      fill: YinYangFill,
      light: YinYangLight,
      regular: YinYangRegular,
      thin: YinYangThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
