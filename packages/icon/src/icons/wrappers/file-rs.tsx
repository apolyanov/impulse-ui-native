import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FileRsBold } from "../bold";
import { FileRsDuotone } from "../duotone";
import { FileRsFill } from "../fill";
import { FileRsLight } from "../light";
import { FileRsRegular } from "../regular";
import { FileRsThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FileRs = memo(function FileRs(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileRsBold,
      duotone: FileRsDuotone,
      fill: FileRsFill,
      light: FileRsLight,
      regular: FileRsRegular,
      thin: FileRsThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
