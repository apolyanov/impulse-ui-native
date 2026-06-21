import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FilePyBoldIcon } from "../bold";
import { FilePyDuotoneIcon } from "../duotone";
import { FilePyFillIcon } from "../fill";
import { FilePyLightIcon } from "../light";
import { FilePyRegularIcon } from "../regular";
import { FilePyThinIcon } from "../thin";

export const FilePyIcon = memo(function FilePy(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FilePyBoldIcon,
      duotone: FilePyDuotoneIcon,
      fill: FilePyFillIcon,
      light: FilePyLightIcon,
      regular: FilePyRegularIcon,
      thin: FilePyThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
