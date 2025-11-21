import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NotchesBoldIcon } from "../bold";
import { NotchesDuotoneIcon } from "../duotone";
import { NotchesFillIcon } from "../fill";
import { NotchesLightIcon } from "../light";
import { NotchesRegularIcon } from "../regular";
import { NotchesThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NotchesIcon = memo(function Notches(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NotchesBoldIcon,
      duotone: NotchesDuotoneIcon,
      fill: NotchesFillIcon,
      light: NotchesLightIcon,
      regular: NotchesRegularIcon,
      thin: NotchesThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
