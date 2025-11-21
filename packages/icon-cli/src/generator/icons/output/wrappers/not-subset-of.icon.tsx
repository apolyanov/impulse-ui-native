import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { NotSubsetOfBoldIcon } from "../bold";
        import { NotSubsetOfDuotoneIcon } from "../duotone";
        import { NotSubsetOfFillIcon } from "../fill";
        import { NotSubsetOfLightIcon } from "../light";
        import { NotSubsetOfRegularIcon } from "../regular";
        import { NotSubsetOfThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const NotSubsetOfIcon = memo(function NotSubsetOf(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: NotSubsetOfBoldIcon,
            duotone: NotSubsetOfDuotoneIcon,
            fill: NotSubsetOfFillIcon,
            light: NotSubsetOfLightIcon,
            regular: NotSubsetOfRegularIcon,
            thin: NotSubsetOfThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
