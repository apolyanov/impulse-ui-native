import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { FileCBoldIcon } from "../bold";
        import { FileCDuotoneIcon } from "../duotone";
        import { FileCFillIcon } from "../fill";
        import { FileCLightIcon } from "../light";
        import { FileCRegularIcon } from "../regular";
        import { FileCThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const FileCIcon = memo(function FileC(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: FileCBoldIcon,
            duotone: FileCDuotoneIcon,
            fill: FileCFillIcon,
            light: FileCLightIcon,
            regular: FileCRegularIcon,
            thin: FileCThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
