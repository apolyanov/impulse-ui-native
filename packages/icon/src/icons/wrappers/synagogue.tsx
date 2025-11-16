import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SynagogueBold } from "../bold";
import { SynagogueDuotone } from "../duotone";
import { SynagogueFill } from "../fill";
import { SynagogueLight } from "../light";
import { SynagogueRegular } from "../regular";
import { SynagogueThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Synagogue = memo(function Synagogue(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SynagogueBold,
      duotone: SynagogueDuotone,
      fill: SynagogueFill,
      light: SynagogueLight,
      regular: SynagogueRegular,
      thin: SynagogueThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
