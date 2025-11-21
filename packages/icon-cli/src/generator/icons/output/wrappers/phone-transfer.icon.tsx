import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { PhoneTransferBoldIcon } from "../bold";
        import { PhoneTransferDuotoneIcon } from "../duotone";
        import { PhoneTransferFillIcon } from "../fill";
        import { PhoneTransferLightIcon } from "../light";
        import { PhoneTransferRegularIcon } from "../regular";
        import { PhoneTransferThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const PhoneTransferIcon = memo(function PhoneTransfer(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: PhoneTransferBoldIcon,
            duotone: PhoneTransferDuotoneIcon,
            fill: PhoneTransferFillIcon,
            light: PhoneTransferLightIcon,
            regular: PhoneTransferRegularIcon,
            thin: PhoneTransferThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
