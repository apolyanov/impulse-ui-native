import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { EngineBoldIcon } from "../bold/engine-bold.icon";
import { EngineDuotoneIcon } from "../duotone/engine-duotone.icon";
import { EngineFillIcon } from "../fill/engine-fill.icon";
import { EngineLightIcon } from "../light/engine-light.icon";
import { EngineRegularIcon } from "../regular/engine-regular.icon";
import { EngineThinIcon } from "../thin/engine-thin.icon";

export const EngineIcon = memo(function Engine(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: EngineBoldIcon,
      duotone: EngineDuotoneIcon,
      fill: EngineFillIcon,
      light: EngineLightIcon,
      regular: EngineRegularIcon,
      thin: EngineThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
