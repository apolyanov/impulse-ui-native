import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ExportBoldIcon } from "../bold";
        import { ExportDuotoneIcon } from "../duotone";
        import { ExportFillIcon } from "../fill";
        import { ExportLightIcon } from "../light";
        import { ExportRegularIcon } from "../regular";
        import { ExportThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ExportIcon = memo(function Export(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ExportBoldIcon,
            duotone: ExportDuotoneIcon,
            fill: ExportFillIcon,
            light: ExportLightIcon,
            regular: ExportRegularIcon,
            thin: ExportThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
