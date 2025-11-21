import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { HexagonBoldIcon } from "../bold";
        import { HexagonDuotoneIcon } from "../duotone";
        import { HexagonFillIcon } from "../fill";
        import { HexagonLightIcon } from "../light";
        import { HexagonRegularIcon } from "../regular";
        import { HexagonThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const HexagonIcon = memo(function Hexagon(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: HexagonBoldIcon,
            duotone: HexagonDuotoneIcon,
            fill: HexagonFillIcon,
            light: HexagonLightIcon,
            regular: HexagonRegularIcon,
            thin: HexagonThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
