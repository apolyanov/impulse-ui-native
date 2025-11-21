import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { FileMinusBoldIcon } from "../bold";
        import { FileMinusDuotoneIcon } from "../duotone";
        import { FileMinusFillIcon } from "../fill";
        import { FileMinusLightIcon } from "../light";
        import { FileMinusRegularIcon } from "../regular";
        import { FileMinusThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const FileMinusIcon = memo(function FileMinus(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: FileMinusBoldIcon,
            duotone: FileMinusDuotoneIcon,
            fill: FileMinusFillIcon,
            light: FileMinusLightIcon,
            regular: FileMinusRegularIcon,
            thin: FileMinusThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
