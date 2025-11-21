import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { TableBoldIcon } from "../bold";
        import { TableDuotoneIcon } from "../duotone";
        import { TableFillIcon } from "../fill";
        import { TableLightIcon } from "../light";
        import { TableRegularIcon } from "../regular";
        import { TableThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const TableIcon = memo(function Table(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: TableBoldIcon,
            duotone: TableDuotoneIcon,
            fill: TableFillIcon,
            light: TableLightIcon,
            regular: TableRegularIcon,
            thin: TableThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
