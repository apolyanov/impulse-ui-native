import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { KeyholeBoldIcon } from "../bold/keyhole-bold.icon";
import { KeyholeDuotoneIcon } from "../duotone/keyhole-duotone.icon";
import { KeyholeFillIcon } from "../fill/keyhole-fill.icon";
import { KeyholeLightIcon } from "../light/keyhole-light.icon";
import { KeyholeRegularIcon } from "../regular/keyhole-regular.icon";
import { KeyholeThinIcon } from "../thin/keyhole-thin.icon";

export const KeyholeIcon = memo(function Keyhole(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: KeyholeBoldIcon,
      duotone: KeyholeDuotoneIcon,
      fill: KeyholeFillIcon,
      light: KeyholeLightIcon,
      regular: KeyholeRegularIcon,
      thin: KeyholeThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
