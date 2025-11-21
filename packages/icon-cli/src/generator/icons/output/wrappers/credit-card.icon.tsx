import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CreditCardBoldIcon } from "../bold";
        import { CreditCardDuotoneIcon } from "../duotone";
        import { CreditCardFillIcon } from "../fill";
        import { CreditCardLightIcon } from "../light";
        import { CreditCardRegularIcon } from "../regular";
        import { CreditCardThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CreditCardIcon = memo(function CreditCard(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CreditCardBoldIcon,
            duotone: CreditCardDuotoneIcon,
            fill: CreditCardFillIcon,
            light: CreditCardLightIcon,
            regular: CreditCardRegularIcon,
            thin: CreditCardThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
