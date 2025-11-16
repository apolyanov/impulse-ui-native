import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CopyBold } from "../bold";
import { CopyDuotone } from "../duotone";
import { CopyFill } from "../fill";
import { CopyLight } from "../light";
import { CopyRegular } from "../regular";
import { CopyThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Copy = memo(function Copy(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CopyBold,
      duotone: CopyDuotone,
      fill: CopyFill,
      light: CopyLight,
      regular: CopyRegular,
      thin: CopyThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
