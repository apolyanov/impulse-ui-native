import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TabsBold } from "../bold";
import { TabsDuotone } from "../duotone";
import { TabsFill } from "../fill";
import { TabsLight } from "../light";
import { TabsRegular } from "../regular";
import { TabsThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Tabs = memo(function Tabs(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TabsBold,
      duotone: TabsDuotone,
      fill: TabsFill,
      light: TabsLight,
      regular: TabsRegular,
      thin: TabsThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
