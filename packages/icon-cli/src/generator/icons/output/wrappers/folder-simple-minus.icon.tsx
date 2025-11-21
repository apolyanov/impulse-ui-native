import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { FolderSimpleMinusBoldIcon } from "../bold";
        import { FolderSimpleMinusDuotoneIcon } from "../duotone";
        import { FolderSimpleMinusFillIcon } from "../fill";
        import { FolderSimpleMinusLightIcon } from "../light";
        import { FolderSimpleMinusRegularIcon } from "../regular";
        import { FolderSimpleMinusThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const FolderSimpleMinusIcon = memo(function FolderSimpleMinus(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: FolderSimpleMinusBoldIcon,
            duotone: FolderSimpleMinusDuotoneIcon,
            fill: FolderSimpleMinusFillIcon,
            light: FolderSimpleMinusLightIcon,
            regular: FolderSimpleMinusRegularIcon,
            thin: FolderSimpleMinusThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
