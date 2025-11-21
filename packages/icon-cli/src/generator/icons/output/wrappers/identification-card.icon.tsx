import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { IdentificationCardBoldIcon } from "../bold";
        import { IdentificationCardDuotoneIcon } from "../duotone";
        import { IdentificationCardFillIcon } from "../fill";
        import { IdentificationCardLightIcon } from "../light";
        import { IdentificationCardRegularIcon } from "../regular";
        import { IdentificationCardThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const IdentificationCardIcon = memo(function IdentificationCard(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: IdentificationCardBoldIcon,
            duotone: IdentificationCardDuotoneIcon,
            fill: IdentificationCardFillIcon,
            light: IdentificationCardLightIcon,
            regular: IdentificationCardRegularIcon,
            thin: IdentificationCardThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
