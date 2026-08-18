import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MosqueBoldIcon } from "../bold/mosque-bold.icon";
import { MosqueDuotoneIcon } from "../duotone/mosque-duotone.icon";
import { MosqueFillIcon } from "../fill/mosque-fill.icon";
import { MosqueLightIcon } from "../light/mosque-light.icon";
import { MosqueRegularIcon } from "../regular/mosque-regular.icon";
import { MosqueThinIcon } from "../thin/mosque-thin.icon";

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
