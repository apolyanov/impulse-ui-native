import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FileCsvBold } from "../bold";
import { FileCsvDuotone } from "../duotone";
import { FileCsvFill } from "../fill";
import { FileCsvLight } from "../light";
import { FileCsvRegular } from "../regular";
import { FileCsvThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FileCsv = memo(function FileCsv(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileCsvBold,
      duotone: FileCsvDuotone,
      fill: FileCsvFill,
      light: FileCsvLight,
      regular: FileCsvRegular,
      thin: FileCsvThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
