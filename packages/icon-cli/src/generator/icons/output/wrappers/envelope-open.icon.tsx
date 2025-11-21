import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { EnvelopeOpenBoldIcon } from "../bold";
        import { EnvelopeOpenDuotoneIcon } from "../duotone";
        import { EnvelopeOpenFillIcon } from "../fill";
        import { EnvelopeOpenLightIcon } from "../light";
        import { EnvelopeOpenRegularIcon } from "../regular";
        import { EnvelopeOpenThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const EnvelopeOpenIcon = memo(function EnvelopeOpen(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: EnvelopeOpenBoldIcon,
            duotone: EnvelopeOpenDuotoneIcon,
            fill: EnvelopeOpenFillIcon,
            light: EnvelopeOpenLightIcon,
            regular: EnvelopeOpenRegularIcon,
            thin: EnvelopeOpenThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
