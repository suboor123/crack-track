import React from 'react';
import { Placeholder } from 'rsuite';

type Props = {
    col: number;
    row: number;
    height?: number;
};

export default function SkeletonLoading(props: Props) {
    return (
        <>
            {Array(props.row)
                .fill(props.row)
                .map((row, key) => (
                    <div className="row" key={key}>
                        {Array(props.col)
                            .fill(props.col)
                            .map((col, key) => (
                                <div className={`col`} key={key}>
                                    <Placeholder.Graph
                                        active
                                        height={props.height || 200}
                                    />
                                </div>
                            ))}
                    </div>
                ))}
        </>
    );
}
