import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ArrowFatUpBoldIcon } from "../bold";
        import { ArrowFatUpDuotoneIcon } from "../duotone";
        import { ArrowFatUpFillIcon } from "../fill";
        import { ArrowFatUpLightIcon } from "../light";
        import { ArrowFatUpRegularIcon } from "../regular";
        import { ArrowFatUpThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ArrowFatUpIcon = memo(function ArrowFatUp(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ArrowFatUpBoldIcon,
            duotone: ArrowFatUpDuotoneIcon,
            fill: ArrowFatUpFillIcon,
            light: ArrowFatUpLightIcon,
            regular: ArrowFatUpRegularIcon,
            thin: ArrowFatUpThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
