import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ColumnsPlusLeftBoldIcon } from "../bold";
        import { ColumnsPlusLeftDuotoneIcon } from "../duotone";
        import { ColumnsPlusLeftFillIcon } from "../fill";
        import { ColumnsPlusLeftLightIcon } from "../light";
        import { ColumnsPlusLeftRegularIcon } from "../regular";
        import { ColumnsPlusLeftThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ColumnsPlusLeftIcon = memo(function ColumnsPlusLeft(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ColumnsPlusLeftBoldIcon,
            duotone: ColumnsPlusLeftDuotoneIcon,
            fill: ColumnsPlusLeftFillIcon,
            light: ColumnsPlusLeftLightIcon,
            regular: ColumnsPlusLeftRegularIcon,
            thin: ColumnsPlusLeftThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
