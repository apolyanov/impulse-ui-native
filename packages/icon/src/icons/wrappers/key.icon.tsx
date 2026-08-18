import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { KeyBoldIcon } from "../bold/key-bold.icon";
import { KeyDuotoneIcon } from "../duotone/key-duotone.icon";
import { KeyFillIcon } from "../fill/key-fill.icon";
import { KeyLightIcon } from "../light/key-light.icon";
import { KeyRegularIcon } from "../regular/key-regular.icon";
import { KeyThinIcon } from "../thin/key-thin.icon";

export const KeyIcon = memo(function Key(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: KeyBoldIcon,
      duotone: KeyDuotoneIcon,
      fill: KeyFillIcon,
      light: KeyLightIcon,
      regular: KeyRegularIcon,
      thin: KeyThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
