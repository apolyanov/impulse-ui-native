import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ChurchBold } from "../bold";
import { ChurchDuotone } from "../duotone";
import { ChurchFill } from "../fill";
import { ChurchLight } from "../light";
import { ChurchRegular } from "../regular";
import { ChurchThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Church = memo(function Church(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChurchBold,
      duotone: ChurchDuotone,
      fill: ChurchFill,
      light: ChurchLight,
      regular: ChurchRegular,
      thin: ChurchThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
