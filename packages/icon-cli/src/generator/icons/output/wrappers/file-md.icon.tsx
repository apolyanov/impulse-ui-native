import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { FileMdBoldIcon } from "../bold";
        import { FileMdDuotoneIcon } from "../duotone";
        import { FileMdFillIcon } from "../fill";
        import { FileMdLightIcon } from "../light";
        import { FileMdRegularIcon } from "../regular";
        import { FileMdThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const FileMdIcon = memo(function FileMd(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: FileMdBoldIcon,
            duotone: FileMdDuotoneIcon,
            fill: FileMdFillIcon,
            light: FileMdLightIcon,
            regular: FileMdRegularIcon,
            thin: FileMdThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
