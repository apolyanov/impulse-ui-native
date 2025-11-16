import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FileTsBold } from "../bold";
import { FileTsDuotone } from "../duotone";
import { FileTsFill } from "../fill";
import { FileTsLight } from "../light";
import { FileTsRegular } from "../regular";
import { FileTsThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FileTs = memo(function FileTs(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileTsBold,
      duotone: FileTsDuotone,
      fill: FileTsFill,
      light: FileTsLight,
      regular: FileTsRegular,
      thin: FileTsThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
