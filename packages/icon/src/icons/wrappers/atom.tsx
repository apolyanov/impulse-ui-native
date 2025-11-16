import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AtomBold } from "../bold";
import { AtomDuotone } from "../duotone";
import { AtomFill } from "../fill";
import { AtomLight } from "../light";
import { AtomRegular } from "../regular";
import { AtomThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Atom = memo(function Atom(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AtomBold,
      duotone: AtomDuotone,
      fill: AtomFill,
      light: AtomLight,
      regular: AtomRegular,
      thin: AtomThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
