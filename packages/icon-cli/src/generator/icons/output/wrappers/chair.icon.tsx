import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ChairBoldIcon } from "../bold";
        import { ChairDuotoneIcon } from "../duotone";
        import { ChairFillIcon } from "../fill";
        import { ChairLightIcon } from "../light";
        import { ChairRegularIcon } from "../regular";
        import { ChairThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ChairIcon = memo(function Chair(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ChairBoldIcon,
            duotone: ChairDuotoneIcon,
            fill: ChairFillIcon,
            light: ChairLightIcon,
            regular: ChairRegularIcon,
            thin: ChairThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
