import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FilePlusBoldIcon } from "../bold/file-plus-bold.icon";
import { FilePlusDuotoneIcon } from "../duotone/file-plus-duotone.icon";
import { FilePlusFillIcon } from "../fill/file-plus-fill.icon";
import { FilePlusLightIcon } from "../light/file-plus-light.icon";
import { FilePlusRegularIcon } from "../regular/file-plus-regular.icon";
import { FilePlusThinIcon } from "../thin/file-plus-thin.icon";

export const FilePlusIcon = memo(function FilePlus(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FilePlusBoldIcon,
      duotone: FilePlusDuotoneIcon,
      fill: FilePlusFillIcon,
      light: FilePlusLightIcon,
      regular: FilePlusRegularIcon,
      thin: FilePlusThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
