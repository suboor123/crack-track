import React from 'react';
import { compareAsc, format } from 'date-fns';

interface Props {
    date: string;
    includeTime?: boolean;
}

const DateFormatPipe: React.FC<Props> = (props) => {
    const formatDate = (() => {
        let dformat = 'EEEE, MMMM d y';
        if (props.includeTime) {
            dformat += ' h:mm a';
        }
        return format(new Date(props.date), dformat as any);
    })();

    return <>{formatDate}</>;
};

export default DateFormatPipe;
