import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FolderSimpleBold } from "../bold";
import { FolderSimpleDuotone } from "../duotone";
import { FolderSimpleFill } from "../fill";
import { FolderSimpleLight } from "../light";
import { FolderSimpleRegular } from "../regular";
import { FolderSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FolderSimple = memo(function FolderSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FolderSimpleBold,
      duotone: FolderSimpleDuotone,
      fill: FolderSimpleFill,
      light: FolderSimpleLight,
      regular: FolderSimpleRegular,
      thin: FolderSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
