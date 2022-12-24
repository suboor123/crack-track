import { AccessGuard } from '../../library/guards/access.guard';
import { ButtonProps } from './button';
import Button from './Button.component';

export default function UserButton(props: ButtonProps) {
    if (AccessGuard.levelUser) {
        return <Button {...props}>{props.children}</Button>;
    }
    return <></>;
}
