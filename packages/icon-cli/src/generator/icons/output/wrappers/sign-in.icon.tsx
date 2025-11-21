import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { SignInBoldIcon } from "../bold";
        import { SignInDuotoneIcon } from "../duotone";
        import { SignInFillIcon } from "../fill";
        import { SignInLightIcon } from "../light";
        import { SignInRegularIcon } from "../regular";
        import { SignInThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const SignInIcon = memo(function SignIn(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: SignInBoldIcon,
            duotone: SignInDuotoneIcon,
            fill: SignInFillIcon,
            light: SignInLightIcon,
            regular: SignInRegularIcon,
            thin: SignInThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
