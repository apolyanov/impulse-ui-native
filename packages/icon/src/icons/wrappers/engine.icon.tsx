import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { EngineBoldIcon } from "../bold";
import { EngineDuotoneIcon } from "../duotone";
import { EngineFillIcon } from "../fill";
import { EngineLightIcon } from "../light";
import { EngineRegularIcon } from "../regular";
import { EngineThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
