import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ArrowsInBoldIcon } from "../bold";
        import { ArrowsInDuotoneIcon } from "../duotone";
        import { ArrowsInFillIcon } from "../fill";
        import { ArrowsInLightIcon } from "../light";
        import { ArrowsInRegularIcon } from "../regular";
        import { ArrowsInThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ArrowsInIcon = memo(function ArrowsIn(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ArrowsInBoldIcon,
            duotone: ArrowsInDuotoneIcon,
            fill: ArrowsInFillIcon,
            light: ArrowsInLightIcon,
            regular: ArrowsInRegularIcon,
            thin: ArrowsInThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
