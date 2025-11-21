import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { VoicemailBoldIcon } from "../bold";
        import { VoicemailDuotoneIcon } from "../duotone";
        import { VoicemailFillIcon } from "../fill";
        import { VoicemailLightIcon } from "../light";
        import { VoicemailRegularIcon } from "../regular";
        import { VoicemailThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const VoicemailIcon = memo(function Voicemail(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: VoicemailBoldIcon,
            duotone: VoicemailDuotoneIcon,
            fill: VoicemailFillIcon,
            light: VoicemailLightIcon,
            regular: VoicemailRegularIcon,
            thin: VoicemailThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
