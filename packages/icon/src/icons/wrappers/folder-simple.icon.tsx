import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FolderSimpleBoldIcon } from "../bold";
import { FolderSimpleDuotoneIcon } from "../duotone";
import { FolderSimpleFillIcon } from "../fill";
import { FolderSimpleLightIcon } from "../light";
import { FolderSimpleRegularIcon } from "../regular";
import { FolderSimpleThinIcon } from "../thin";

export const FolderSimpleIcon = memo(function FolderSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FolderSimpleBoldIcon,
      duotone: FolderSimpleDuotoneIcon,
      fill: FolderSimpleFillIcon,
      light: FolderSimpleLightIcon,
      regular: FolderSimpleRegularIcon,
      thin: FolderSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
