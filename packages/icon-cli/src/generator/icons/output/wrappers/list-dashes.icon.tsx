import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ListDashesBoldIcon } from "../bold";
        import { ListDashesDuotoneIcon } from "../duotone";
        import { ListDashesFillIcon } from "../fill";
        import { ListDashesLightIcon } from "../light";
        import { ListDashesRegularIcon } from "../regular";
        import { ListDashesThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ListDashesIcon = memo(function ListDashes(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ListDashesBoldIcon,
            duotone: ListDashesDuotoneIcon,
            fill: ListDashesFillIcon,
            light: ListDashesLightIcon,
            regular: ListDashesRegularIcon,
            thin: ListDashesThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
