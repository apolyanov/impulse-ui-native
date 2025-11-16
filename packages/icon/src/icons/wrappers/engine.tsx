import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { EngineBold } from "../bold";
import { EngineDuotone } from "../duotone";
import { EngineFill } from "../fill";
import { EngineLight } from "../light";
import { EngineRegular } from "../regular";
import { EngineThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Engine = memo(function Engine(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: EngineBold,
      duotone: EngineDuotone,
      fill: EngineFill,
      light: EngineLight,
      regular: EngineRegular,
      thin: EngineThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
