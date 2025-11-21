import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { SquaresFourBoldIcon } from "../bold";
        import { SquaresFourDuotoneIcon } from "../duotone";
        import { SquaresFourFillIcon } from "../fill";
        import { SquaresFourLightIcon } from "../light";
        import { SquaresFourRegularIcon } from "../regular";
        import { SquaresFourThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const SquaresFourIcon = memo(function SquaresFour(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: SquaresFourBoldIcon,
            duotone: SquaresFourDuotoneIcon,
            fill: SquaresFourFillIcon,
            light: SquaresFourLightIcon,
            regular: SquaresFourRegularIcon,
            thin: SquaresFourThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
