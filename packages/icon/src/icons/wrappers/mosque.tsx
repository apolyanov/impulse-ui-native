import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MosqueBold } from "../bold";
import { MosqueDuotone } from "../duotone";
import { MosqueFill } from "../fill";
import { MosqueLight } from "../light";
import { MosqueRegular } from "../regular";
import { MosqueThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Mosque = memo(function Mosque(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MosqueBold,
      duotone: MosqueDuotone,
      fill: MosqueFill,
      light: MosqueLight,
      regular: MosqueRegular,
      thin: MosqueThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
