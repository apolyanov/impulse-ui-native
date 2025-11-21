import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FolderSimplePlusBoldIcon } from "../bold";
import { FolderSimplePlusDuotoneIcon } from "../duotone";
import { FolderSimplePlusFillIcon } from "../fill";
import { FolderSimplePlusLightIcon } from "../light";
import { FolderSimplePlusRegularIcon } from "../regular";
import { FolderSimplePlusThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FolderSimplePlusIcon = memo(function FolderSimplePlus(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FolderSimplePlusBoldIcon,
      duotone: FolderSimplePlusDuotoneIcon,
      fill: FolderSimplePlusFillIcon,
      light: FolderSimplePlusLightIcon,
      regular: FolderSimplePlusRegularIcon,
      thin: FolderSimplePlusThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
