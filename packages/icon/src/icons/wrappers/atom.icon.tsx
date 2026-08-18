import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { AtomBoldIcon } from "../bold/atom-bold.icon";
import { AtomDuotoneIcon } from "../duotone/atom-duotone.icon";
import { AtomFillIcon } from "../fill/atom-fill.icon";
import { AtomLightIcon } from "../light/atom-light.icon";
import { AtomRegularIcon } from "../regular/atom-regular.icon";
import { AtomThinIcon } from "../thin/atom-thin.icon";

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
