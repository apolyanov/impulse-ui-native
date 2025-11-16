import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NotebookBold } from "../bold";
import { NotebookDuotone } from "../duotone";
import { NotebookFill } from "../fill";
import { NotebookLight } from "../light";
import { NotebookRegular } from "../regular";
import { NotebookThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Notebook = memo(function Notebook(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NotebookBold,
      duotone: NotebookDuotone,
      fill: NotebookFill,
      light: NotebookLight,
      regular: NotebookRegular,
      thin: NotebookThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
