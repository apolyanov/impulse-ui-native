import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TabsBoldIcon } from "../bold/tabs-bold.icon";
import { TabsDuotoneIcon } from "../duotone/tabs-duotone.icon";
import { TabsFillIcon } from "../fill/tabs-fill.icon";
import { TabsLightIcon } from "../light/tabs-light.icon";
import { TabsRegularIcon } from "../regular/tabs-regular.icon";
import { TabsThinIcon } from "../thin/tabs-thin.icon";

export const TabsIcon = memo(function Tabs(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TabsBoldIcon,
      duotone: TabsDuotoneIcon,
      fill: TabsFillIcon,
      light: TabsLightIcon,
      regular: TabsRegularIcon,
      thin: TabsThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
