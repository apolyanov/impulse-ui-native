import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NotchesBoldIcon } from "../bold/notches-bold.icon";
import { NotchesDuotoneIcon } from "../duotone/notches-duotone.icon";
import { NotchesFillIcon } from "../fill/notches-fill.icon";
import { NotchesLightIcon } from "../light/notches-light.icon";
import { NotchesRegularIcon } from "../regular/notches-regular.icon";
import { NotchesThinIcon } from "../thin/notches-thin.icon";

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
