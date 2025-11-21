import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FileCppBoldIcon } from "../bold";
import { FileCppDuotoneIcon } from "../duotone";
import { FileCppFillIcon } from "../fill";
import { FileCppLightIcon } from "../light";
import { FileCppRegularIcon } from "../regular";
import { FileCppThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FileCppIcon = memo(function FileCpp(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileCppBoldIcon,
      duotone: FileCppDuotoneIcon,
      fill: FileCppFillIcon,
      light: FileCppLightIcon,
      regular: FileCppRegularIcon,
      thin: FileCppThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
