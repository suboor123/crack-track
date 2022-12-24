import { AccessGuard } from '../../library/guards/access.guard';
import { ButtonProps } from './button';
import Button from './Button.component';

export default function AdminButton(props: ButtonProps) {
    if (AccessGuard.levelAdmin) {
        return <Button {...props}>{props.children}</Button>;
    }
    return <></>;
}
