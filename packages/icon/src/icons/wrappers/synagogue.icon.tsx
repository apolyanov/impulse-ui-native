import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SynagogueBoldIcon } from "../bold/synagogue-bold.icon";
import { SynagogueDuotoneIcon } from "../duotone/synagogue-duotone.icon";
import { SynagogueFillIcon } from "../fill/synagogue-fill.icon";
import { SynagogueLightIcon } from "../light/synagogue-light.icon";
import { SynagogueRegularIcon } from "../regular/synagogue-regular.icon";
import { SynagogueThinIcon } from "../thin/synagogue-thin.icon";

export const SynagogueIcon = memo(function Synagogue(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SynagogueBoldIcon,
      duotone: SynagogueDuotoneIcon,
      fill: SynagogueFillIcon,
      light: SynagogueLightIcon,
      regular: SynagogueRegularIcon,
      thin: SynagogueThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
