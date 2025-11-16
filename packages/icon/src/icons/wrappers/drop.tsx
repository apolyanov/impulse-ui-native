import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DropBold } from "../bold";
import { DropDuotone } from "../duotone";
import { DropFill } from "../fill";
import { DropLight } from "../light";
import { DropRegular } from "../regular";
import { DropThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Drop = memo(function Drop(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DropBold,
      duotone: DropDuotone,
      fill: DropFill,
      light: DropLight,
      regular: DropRegular,
      thin: DropThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
