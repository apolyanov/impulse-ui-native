import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FileCppBoldIcon } from "../bold/file-cpp-bold.icon";
import { FileCppDuotoneIcon } from "../duotone/file-cpp-duotone.icon";
import { FileCppFillIcon } from "../fill/file-cpp-fill.icon";
import { FileCppLightIcon } from "../light/file-cpp-light.icon";
import { FileCppRegularIcon } from "../regular/file-cpp-regular.icon";
import { FileCppThinIcon } from "../thin/file-cpp-thin.icon";

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
