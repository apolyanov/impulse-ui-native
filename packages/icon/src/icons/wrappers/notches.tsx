import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NotchesBold } from "../bold";
import { NotchesDuotone } from "../duotone";
import { NotchesFill } from "../fill";
import { NotchesLight } from "../light";
import { NotchesRegular } from "../regular";
import { NotchesThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Notches = memo(function Notches(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NotchesBold,
      duotone: NotchesDuotone,
      fill: NotchesFill,
      light: NotchesLight,
      regular: NotchesRegular,
      thin: NotchesThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
