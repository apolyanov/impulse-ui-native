import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FilePyBold } from "../bold";
import { FilePyDuotone } from "../duotone";
import { FilePyFill } from "../fill";
import { FilePyLight } from "../light";
import { FilePyRegular } from "../regular";
import { FilePyThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FilePy = memo(function FilePy(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FilePyBold,
      duotone: FilePyDuotone,
      fill: FilePyFill,
      light: FilePyLight,
      regular: FilePyRegular,
      thin: FilePyThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
