import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FileTxtBold } from "../bold";
import { FileTxtDuotone } from "../duotone";
import { FileTxtFill } from "../fill";
import { FileTxtLight } from "../light";
import { FileTxtRegular } from "../regular";
import { FileTxtThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FileTxt = memo(function FileTxt(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileTxtBold,
      duotone: FileTxtDuotone,
      fill: FileTxtFill,
      light: FileTxtLight,
      regular: FileTxtRegular,
      thin: FileTxtThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
