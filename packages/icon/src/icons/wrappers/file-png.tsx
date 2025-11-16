import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FilePngBold } from "../bold";
import { FilePngDuotone } from "../duotone";
import { FilePngFill } from "../fill";
import { FilePngLight } from "../light";
import { FilePngRegular } from "../regular";
import { FilePngThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FilePng = memo(function FilePng(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FilePngBold,
      duotone: FilePngDuotone,
      fill: FilePngFill,
      light: FilePngLight,
      regular: FilePngRegular,
      thin: FilePngThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
