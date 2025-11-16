import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SealCheckBold } from "../bold";
import { SealCheckDuotone } from "../duotone";
import { SealCheckFill } from "../fill";
import { SealCheckLight } from "../light";
import { SealCheckRegular } from "../regular";
import { SealCheckThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SealCheck = memo(function SealCheck(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SealCheckBold,
      duotone: SealCheckDuotone,
      fill: SealCheckFill,
      light: SealCheckLight,
      regular: SealCheckRegular,
      thin: SealCheckThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
