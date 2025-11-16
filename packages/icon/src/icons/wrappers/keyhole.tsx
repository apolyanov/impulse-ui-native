import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { KeyholeBold } from "../bold";
import { KeyholeDuotone } from "../duotone";
import { KeyholeFill } from "../fill";
import { KeyholeLight } from "../light";
import { KeyholeRegular } from "../regular";
import { KeyholeThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Keyhole = memo(function Keyhole(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: KeyholeBold,
      duotone: KeyholeDuotone,
      fill: KeyholeFill,
      light: KeyholeLight,
      regular: KeyholeRegular,
      thin: KeyholeThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
