import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TextHOneBold } from "../bold";
import { TextHOneDuotone } from "../duotone";
import { TextHOneFill } from "../fill";
import { TextHOneLight } from "../light";
import { TextHOneRegular } from "../regular";
import { TextHOneThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TextHOne = memo(function TextHOne(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TextHOneBold,
      duotone: TextHOneDuotone,
      fill: TextHOneFill,
      light: TextHOneLight,
      regular: TextHOneRegular,
      thin: TextHOneThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
