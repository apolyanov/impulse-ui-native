import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { LaptopBoldIcon } from "../bold";
        import { LaptopDuotoneIcon } from "../duotone";
        import { LaptopFillIcon } from "../fill";
        import { LaptopLightIcon } from "../light";
        import { LaptopRegularIcon } from "../regular";
        import { LaptopThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const LaptopIcon = memo(function Laptop(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: LaptopBoldIcon,
            duotone: LaptopDuotoneIcon,
            fill: LaptopFillIcon,
            light: LaptopLightIcon,
            regular: LaptopRegularIcon,
            thin: LaptopThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
