import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { SupersetProperOfBoldIcon } from "../bold";
        import { SupersetProperOfDuotoneIcon } from "../duotone";
        import { SupersetProperOfFillIcon } from "../fill";
        import { SupersetProperOfLightIcon } from "../light";
        import { SupersetProperOfRegularIcon } from "../regular";
        import { SupersetProperOfThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const SupersetProperOfIcon = memo(function SupersetProperOf(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: SupersetProperOfBoldIcon,
            duotone: SupersetProperOfDuotoneIcon,
            fill: SupersetProperOfFillIcon,
            light: SupersetProperOfLightIcon,
            regular: SupersetProperOfRegularIcon,
            thin: SupersetProperOfThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
