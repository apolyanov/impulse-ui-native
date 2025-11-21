import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { FolderMinusBoldIcon } from "../bold";
        import { FolderMinusDuotoneIcon } from "../duotone";
        import { FolderMinusFillIcon } from "../fill";
        import { FolderMinusLightIcon } from "../light";
        import { FolderMinusRegularIcon } from "../regular";
        import { FolderMinusThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const FolderMinusIcon = memo(function FolderMinus(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: FolderMinusBoldIcon,
            duotone: FolderMinusDuotoneIcon,
            fill: FolderMinusFillIcon,
            light: FolderMinusLightIcon,
            regular: FolderMinusRegularIcon,
            thin: FolderMinusThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
