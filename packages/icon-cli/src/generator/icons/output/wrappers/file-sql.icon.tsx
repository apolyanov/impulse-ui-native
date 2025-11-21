import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { FileSqlBoldIcon } from "../bold";
        import { FileSqlDuotoneIcon } from "../duotone";
        import { FileSqlFillIcon } from "../fill";
        import { FileSqlLightIcon } from "../light";
        import { FileSqlRegularIcon } from "../regular";
        import { FileSqlThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const FileSqlIcon = memo(function FileSql(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: FileSqlBoldIcon,
            duotone: FileSqlDuotoneIcon,
            fill: FileSqlFillIcon,
            light: FileSqlLightIcon,
            regular: FileSqlRegularIcon,
            thin: FileSqlThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
