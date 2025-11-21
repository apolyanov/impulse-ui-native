import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { NotSupersetOfBoldIcon } from "../bold";
        import { NotSupersetOfDuotoneIcon } from "../duotone";
        import { NotSupersetOfFillIcon } from "../fill";
        import { NotSupersetOfLightIcon } from "../light";
        import { NotSupersetOfRegularIcon } from "../regular";
        import { NotSupersetOfThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const NotSupersetOfIcon = memo(function NotSupersetOf(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: NotSupersetOfBoldIcon,
            duotone: NotSupersetOfDuotoneIcon,
            fill: NotSupersetOfFillIcon,
            light: NotSupersetOfLightIcon,
            regular: NotSupersetOfRegularIcon,
            thin: NotSupersetOfThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
