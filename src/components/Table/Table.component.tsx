import React from 'react';

const Table = () => {
    return (
        <div className="table-responsive  shadow-md rounded-md">
            <table className="table mb-0 table-center">
                <thead>
                    <tr>
                        <th
                            scope="col"
                            className="fw-normal border-bottom text-muted py-4 px-3"
                            style={{ minWidth: 250 }}
                        >
                            Name
                        </th>
                        <th
                            scope="col"
                            className="fw-normal border-bottom text-muted py-4 px-3"
                            style={{ width: 150 }}
                        >
                            Price
                        </th>
                        <th
                            scope="col"
                            className="fw-normal border-bottom text-muted py-4 px-3"
                            style={{ width: 150 }}
                        >
                            Change(%)
                        </th>
                        <th
                            scope="col"
                            className="fw-normal border-bottom text-muted py-4 px-3"
                            style={{ width: 150 }}
                        >
                            Change($)
                        </th>
                        <th
                            scope="col"
                            className="fw-normal border-bottom text-muted py-4 px-3"
                            style={{ width: 150 }}
                        >
                            Marketcap
                        </th>
                        <th
                            scope="col"
                            className="fw-normal border-bottom text-muted py-4 px-3 text-end"
                            style={{ width: 100 }}
                        >
                            Trade
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className="p-3">
                            <div className="align-items-center">
                                <img
                                    src="assets/images/crypto/bitcoin.png"
                                    className="me-3"
                                    height={32}
                                />
                                <p className="mb-0 d-inline fw-normal h6">
                                    Bitcoin{' '}
                                    <span className="text-muted">BTC</span>{' '}
                                </p>
                            </div>
                        </th>
                        <td className="p-3">$34587</td>
                        <td className="text-danger p-3">-2.5%</td>
                        <td className="text-danger p-3">-$745</td>
                        <td className="text-muted p-3">$725,354M</td>
                        <td className="p-3 text-end">
                            <a
                                href="javascript:void(0)"
                                className="btn btn-sm btn-primary"
                            >
                                Trade
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <th className="p-3">
                            <div className="align-items-center">
                                <img
                                    src="assets/images/crypto/litecoin.png"
                                    className="me-3"
                                    height={32}
                                />
                                <p className="mb-0 d-inline fw-normal h6">
                                    Litecoin{' '}
                                    <span className="text-muted">LTC</span>
                                </p>
                            </div>
                        </th>
                        <td className="p-3">$216</td>
                        <td className="text-success p-3">+.264%</td>
                        <td className="text-success p-3">+$.264</td>
                        <td className="text-muted p-3">$11,100M</td>
                        <td className="p-3 text-end">
                            <a
                                href="javascript:void(0)"
                                className="btn btn-sm btn-primary"
                            >
                                Trade
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <th className="p-3">
                            <div className="align-items-center">
                                <img
                                    src="assets/images/crypto/auroracoin.png"
                                    className="me-3"
                                    height={32}
                                />
                                <p className="mb-0 d-inline fw-normal h6">
                                    Auroracoin{' '}
                                    <span className="text-muted">ARC</span>{' '}
                                </p>
                            </div>
                        </th>
                        <td className="p-3">$452</td>
                        <td className="text-danger p-3">-1.9%</td>
                        <td className="text-danger p-3">-$1.9</td>
                        <td className="text-muted p-3">$45,785M</td>
                        <td className="p-3 text-end">
                            <a
                                href="javascript:void(0)"
                                className="btn btn-sm btn-primary"
                            >
                                Trade
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <th className="p-3">
                            <div className="align-items-center">
                                <img
                                    src="assets/images/crypto/coinye.png"
                                    className="me-3"
                                    height={32}
                                />
                                <p className="mb-0 d-inline fw-normal h6">
                                    Coinye{' '}
                                    <span className="text-muted">CNY</span>{' '}
                                </p>
                            </div>
                        </th>
                        <td className="p-3">$154</td>
                        <td className="text-success p-3">+1.05%</td>
                        <td className="text-success p-3">+$1.05</td>
                        <td className="text-muted p-3">$85,478M</td>
                        <td className="p-3 text-end">
                            <a
                                href="javascript:void(0)"
                                className="btn btn-sm btn-primary"
                            >
                                Trade
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <th className="p-3">
                            <div className="align-items-center">
                                <img
                                    src="assets/images/crypto/ethereum.png"
                                    className="me-3"
                                    height={32}
                                />
                                <p className="mt-2 d-inline fw-normal h6">
                                    Ethereum Coin{' '}
                                    <span className="text-muted">ETH</span>{' '}
                                </p>
                            </div>
                        </th>
                        <td className="p-3">$854</td>
                        <td className="text-success p-3">+1.705%</td>
                        <td className="text-success p-3">+$1.705</td>
                        <td className="text-muted p-3">$112,452M</td>
                        <td className="p-3 text-end">
                            <a
                                href="javascript:void(0)"
                                className="btn btn-sm btn-primary"
                            >
                                Trade
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <th className="p-3">
                            <div className="align-items-center">
                                <img
                                    src="assets/images/crypto/potcoin.png"
                                    className="me-3"
                                    height={32}
                                />
                                <p className="mb-0 d-inline fw-normal h6">
                                    Potcoin{' '}
                                    <span className="text-muted">PTC</span>{' '}
                                </p>
                            </div>
                        </th>
                        <td className="p-3">$548</td>
                        <td className="text-danger p-3">-3.2%</td>
                        <td className="text-danger p-3">-$3.2</td>
                        <td className="text-muted p-3">$4,712M</td>
                        <td className="p-3 text-end">
                            <a
                                href="javascript:void(0)"
                                className="btn btn-sm btn-primary"
                            >
                                Trade
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <th className="p-3">
                            <div className="align-items-center">
                                <img
                                    src="assets/images/crypto/zcash.png"
                                    className="me-3"
                                    height={32}
                                />
                                <p className="mb-0 d-inline fw-normal h6">
                                    Zcash Coin{' '}
                                    <span className="text-muted">ZCC</span>{' '}
                                </p>
                            </div>
                        </th>
                        <td className="p-3">$965</td>
                        <td className="text-success p-3">+1.465%</td>
                        <td className="text-success p-3">+$1.465</td>
                        <td className="text-muted p-3">$487,552M</td>
                        <td className="p-3 text-end">
                            <a
                                href="javascript:void(0)"
                                className="btn btn-sm btn-primary"
                            >
                                Trade
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <th className="p-3">
                            <div className="align-items-center">
                                <img
                                    src="assets/images/crypto/primecoin.png"
                                    className="me-3"
                                    height={32}
                                />
                                <p className="mb-0 d-inline fw-normal h6">
                                    Prime coin{' '}
                                    <span className="text-muted">XPM</span>{' '}
                                </p>
                            </div>
                        </th>
                        <td className="p-3">$4875</td>
                        <td className="text-danger p-3">-1.08%</td>
                        <td className="text-danger p-3">-$1.08</td>
                        <td className="text-muted p-3">$55,221M</td>
                        <td className="p-3 text-end">
                            <a
                                href="javascript:void(0)"
                                className="btn btn-sm btn-primary"
                            >
                                Trade
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <th className="p-3">
                            <div className="align-items-center">
                                <img
                                    src="assets/images/crypto/blocknet.png"
                                    className="me-3"
                                    height={32}
                                />
                                <p className="mb-0 d-inline fw-normal h6">
                                    Blocknet{' '}
                                    <span className="text-muted">BLOCK</span>{' '}
                                </p>
                            </div>
                        </th>
                        <td className="p-3">$478</td>
                        <td className="text-success p-3">+2.8%</td>
                        <td className="text-success p-3">+$2.8</td>
                        <td className="text-muted p-3">$66,552M</td>
                        <td className="p-3 text-end">
                            <a
                                href="javascript:void(0)"
                                className="btn btn-sm btn-primary"
                            >
                                Trade
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <th className="p-3">
                            <div className="align-items-center">
                                <img
                                    src="assets/images/crypto/kucoin.png"
                                    className="me-3"
                                    height={32}
                                />
                                <p className="mb-0 d-inline fw-normal h6">
                                    Kucoin{' '}
                                    <span className="text-muted">KCS</span>{' '}
                                </p>
                            </div>
                        </th>
                        <td className="p-3">$545</td>
                        <td className="text-success p-3">+1.5%</td>
                        <td className="text-success p-3">+$1.5</td>
                        <td className="text-muted p-3">$98,562M</td>
                        <td className="p-3 text-end">
                            <a
                                href="javascript:void(0)"
                                className="btn btn-sm btn-primary"
                            >
                                Trade
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
            {/*end table*/}
        </div>
    );
};

export default Table;
