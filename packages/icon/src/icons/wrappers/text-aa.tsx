import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TextAaBold } from "../bold";
import { TextAaDuotone } from "../duotone";
import { TextAaFill } from "../fill";
import { TextAaLight } from "../light";
import { TextAaRegular } from "../regular";
import { TextAaThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TextAa = memo(function TextAa(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TextAaBold,
      duotone: TextAaDuotone,
      fill: TextAaFill,
      light: TextAaLight,
      regular: TextAaRegular,
      thin: TextAaThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
