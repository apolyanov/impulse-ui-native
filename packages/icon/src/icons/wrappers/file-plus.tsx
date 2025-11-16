import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FilePlusBold } from "../bold";
import { FilePlusDuotone } from "../duotone";
import { FilePlusFill } from "../fill";
import { FilePlusLight } from "../light";
import { FilePlusRegular } from "../regular";
import { FilePlusThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FilePlus = memo(function FilePlus(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FilePlusBold,
      duotone: FilePlusDuotone,
      fill: FilePlusFill,
      light: FilePlusLight,
      regular: FilePlusRegular,
      thin: FilePlusThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
