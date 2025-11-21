import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { EnvelopeSimpleOpenBoldIcon } from "../bold";
        import { EnvelopeSimpleOpenDuotoneIcon } from "../duotone";
        import { EnvelopeSimpleOpenFillIcon } from "../fill";
        import { EnvelopeSimpleOpenLightIcon } from "../light";
        import { EnvelopeSimpleOpenRegularIcon } from "../regular";
        import { EnvelopeSimpleOpenThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const EnvelopeSimpleOpenIcon = memo(function EnvelopeSimpleOpen(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: EnvelopeSimpleOpenBoldIcon,
            duotone: EnvelopeSimpleOpenDuotoneIcon,
            fill: EnvelopeSimpleOpenFillIcon,
            light: EnvelopeSimpleOpenLightIcon,
            regular: EnvelopeSimpleOpenRegularIcon,
            thin: EnvelopeSimpleOpenThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
