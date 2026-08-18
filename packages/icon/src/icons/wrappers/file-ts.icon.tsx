import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FileTsBoldIcon } from "../bold/file-ts-bold.icon";
import { FileTsDuotoneIcon } from "../duotone/file-ts-duotone.icon";
import { FileTsFillIcon } from "../fill/file-ts-fill.icon";
import { FileTsLightIcon } from "../light/file-ts-light.icon";
import { FileTsRegularIcon } from "../regular/file-ts-regular.icon";
import { FileTsThinIcon } from "../thin/file-ts-thin.icon";

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
