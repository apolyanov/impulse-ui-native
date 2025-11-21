import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CellSignalHighBoldIcon } from "../bold";
        import { CellSignalHighDuotoneIcon } from "../duotone";
        import { CellSignalHighFillIcon } from "../fill";
        import { CellSignalHighLightIcon } from "../light";
        import { CellSignalHighRegularIcon } from "../regular";
        import { CellSignalHighThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CellSignalHighIcon = memo(function CellSignalHigh(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CellSignalHighBoldIcon,
            duotone: CellSignalHighDuotoneIcon,
            fill: CellSignalHighFillIcon,
            light: CellSignalHighLightIcon,
            regular: CellSignalHighRegularIcon,
            thin: CellSignalHighThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
