import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { KeyBold } from "../bold";
import { KeyDuotone } from "../duotone";
import { KeyFill } from "../fill";
import { KeyLight } from "../light";
import { KeyRegular } from "../regular";
import { KeyThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Key = memo(function Key(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: KeyBold,
      duotone: KeyDuotone,
      fill: KeyFill,
      light: KeyLight,
      regular: KeyRegular,
      thin: KeyThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
