import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ArrowSquareInBoldIcon } from "../bold";
        import { ArrowSquareInDuotoneIcon } from "../duotone";
        import { ArrowSquareInFillIcon } from "../fill";
        import { ArrowSquareInLightIcon } from "../light";
        import { ArrowSquareInRegularIcon } from "../regular";
        import { ArrowSquareInThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ArrowSquareInIcon = memo(function ArrowSquareIn(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ArrowSquareInBoldIcon,
            duotone: ArrowSquareInDuotoneIcon,
            fill: ArrowSquareInFillIcon,
            light: ArrowSquareInLightIcon,
            regular: ArrowSquareInRegularIcon,
            thin: ArrowSquareInThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
