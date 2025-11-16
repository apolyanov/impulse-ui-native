import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FileJpgBold } from "../bold";
import { FileJpgDuotone } from "../duotone";
import { FileJpgFill } from "../fill";
import { FileJpgLight } from "../light";
import { FileJpgRegular } from "../regular";
import { FileJpgThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FileJpg = memo(function FileJpg(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileJpgBold,
      duotone: FileJpgDuotone,
      fill: FileJpgFill,
      light: FileJpgLight,
      regular: FileJpgRegular,
      thin: FileJpgThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
