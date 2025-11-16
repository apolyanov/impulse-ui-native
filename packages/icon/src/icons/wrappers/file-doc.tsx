import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FileDocBold } from "../bold";
import { FileDocDuotone } from "../duotone";
import { FileDocFill } from "../fill";
import { FileDocLight } from "../light";
import { FileDocRegular } from "../regular";
import { FileDocThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FileDoc = memo(function FileDoc(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileDocBold,
      duotone: FileDocDuotone,
      fill: FileDocFill,
      light: FileDocLight,
      regular: FileDocRegular,
      thin: FileDocThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
