import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FileTsBoldIcon } from "../bold";
import { FileTsDuotoneIcon } from "../duotone";
import { FileTsFillIcon } from "../fill";
import { FileTsLightIcon } from "../light";
import { FileTsRegularIcon } from "../regular";
import { FileTsThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FileTsIcon = memo(function FileTs(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileTsBoldIcon,
      duotone: FileTsDuotoneIcon,
      fill: FileTsFillIcon,
      light: FileTsLightIcon,
      regular: FileTsRegularIcon,
      thin: FileTsThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
