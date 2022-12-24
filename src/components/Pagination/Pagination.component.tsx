import React from 'react';

export default function Pagination() {
    return (
        <div className="col-12 mt-4 pt-2">
            <ul className="pagination justify-content-center mb-0">
                <li className="page-item">
                    <a
                        className="page-link"
                        href="javascript:void(0)"
                        aria-label="Previous"
                    >
                        Prev
                    </a>
                </li>
                <li className="page-item active">
                    <a className="page-link" href="javascript:void(0)">
                        1
                    </a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="javascript:void(0)">
                        2
                    </a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="javascript:void(0)">
                        3
                    </a>
                </li>
                <li className="page-item">
                    <a
                        className="page-link"
                        href="javascript:void(0)"
                        aria-label="Next"
                    >
                        Next
                    </a>
                </li>
            </ul>
        </div>
    );
}
