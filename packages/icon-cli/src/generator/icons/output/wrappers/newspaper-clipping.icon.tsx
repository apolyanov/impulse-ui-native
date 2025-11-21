import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { NewspaperClippingBoldIcon } from "../bold";
        import { NewspaperClippingDuotoneIcon } from "../duotone";
        import { NewspaperClippingFillIcon } from "../fill";
        import { NewspaperClippingLightIcon } from "../light";
        import { NewspaperClippingRegularIcon } from "../regular";
        import { NewspaperClippingThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const NewspaperClippingIcon = memo(function NewspaperClipping(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: NewspaperClippingBoldIcon,
            duotone: NewspaperClippingDuotoneIcon,
            fill: NewspaperClippingFillIcon,
            light: NewspaperClippingLightIcon,
            regular: NewspaperClippingRegularIcon,
            thin: NewspaperClippingThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
