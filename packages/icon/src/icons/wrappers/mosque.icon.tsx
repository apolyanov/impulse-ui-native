import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MosqueBoldIcon } from "../bold";
import { MosqueDuotoneIcon } from "../duotone";
import { MosqueFillIcon } from "../fill";
import { MosqueLightIcon } from "../light";
import { MosqueRegularIcon } from "../regular";
import { MosqueThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MosqueIcon = memo(function Mosque(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MosqueBoldIcon,
      duotone: MosqueDuotoneIcon,
      fill: MosqueFillIcon,
      light: MosqueLightIcon,
      regular: MosqueRegularIcon,
      thin: MosqueThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
