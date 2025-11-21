import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { FileXlsBoldIcon } from "../bold";
        import { FileXlsDuotoneIcon } from "../duotone";
        import { FileXlsFillIcon } from "../fill";
        import { FileXlsLightIcon } from "../light";
        import { FileXlsRegularIcon } from "../regular";
        import { FileXlsThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const FileXlsIcon = memo(function FileXls(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: FileXlsBoldIcon,
            duotone: FileXlsDuotoneIcon,
            fill: FileXlsFillIcon,
            light: FileXlsLightIcon,
            regular: FileXlsRegularIcon,
            thin: FileXlsThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
