import Tooltip from '../../../../../components/Tooltip/Tooltip.component';
import { UserModel } from '../../../model/user.model';

interface Props {
    userModel: UserModel | undefined;
}

export default function OfficialAccountIcon({ userModel }: Props) {
    return (
        <>
            {userModel && userModel.isAdmin && (
                <Tooltip content="Offical User" placement="right">
                    <i className="uil text-primary uil-check-circle"></i>
                </Tooltip>
            )}
        </>
    );
}
