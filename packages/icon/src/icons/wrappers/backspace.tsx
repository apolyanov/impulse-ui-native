import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BackspaceBold } from "../bold";
import { BackspaceDuotone } from "../duotone";
import { BackspaceFill } from "../fill";
import { BackspaceLight } from "../light";
import { BackspaceRegular } from "../regular";
import { BackspaceThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Backspace = memo(function Backspace(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BackspaceBold,
      duotone: BackspaceDuotone,
      fill: BackspaceFill,
      light: BackspaceLight,
      regular: BackspaceRegular,
      thin: BackspaceThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
