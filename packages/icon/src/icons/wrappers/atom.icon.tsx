import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AtomBoldIcon } from "../bold";
import { AtomDuotoneIcon } from "../duotone";
import { AtomFillIcon } from "../fill";
import { AtomLightIcon } from "../light";
import { AtomRegularIcon } from "../regular";
import { AtomThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const AtomIcon = memo(function Atom(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AtomBoldIcon,
      duotone: AtomDuotoneIcon,
      fill: AtomFillIcon,
      light: AtomLightIcon,
      regular: AtomRegularIcon,
      thin: AtomThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
