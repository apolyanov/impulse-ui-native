import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FileCppBold } from "../bold";
import { FileCppDuotone } from "../duotone";
import { FileCppFill } from "../fill";
import { FileCppLight } from "../light";
import { FileCppRegular } from "../regular";
import { FileCppThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FileCpp = memo(function FileCpp(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileCppBold,
      duotone: FileCppDuotone,
      fill: FileCppFill,
      light: FileCppLight,
      regular: FileCppRegular,
      thin: FileCppThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
