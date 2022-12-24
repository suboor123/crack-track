const Footer = () => {
    return (
        <footer
            className="footer mt-100"
            style={{
                backgroundImage: 'url("assets/images/svg-map.svg")',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 py-lg-5">
                        <div className="footer-py-60 text-center">
                            <a href="footer.html#" className="logo-footer">
                                <img
                                    src="assets/images/logo-light.png"
                                    height={32}
                                />
                            </a>
                            <p className="mt-4 para-desc mx-auto">
                                Start working with Landrick that can provide
                                everything you need to generate awareness, drive
                                traffic, connect.
                            </p>
                            <ul className="list-unstyled social-icon foot-social-icon mb-0 mt-4">
                                <li className="list-inline-item">
                                    <a
                                        href="javascript:void(0)"
                                        className="rounded"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-facebook fea icon-sm fea-social"
                                        >
                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                        </svg>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a
                                        href="javascript:void(0)"
                                        className="rounded"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-instagram fea icon-sm fea-social"
                                        >
                                            <rect
                                                x={2}
                                                y={2}
                                                width={20}
                                                height={20}
                                                rx={5}
                                                ry={5}
                                            />
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                            <line
                                                x1="17.5"
                                                y1="6.5"
                                                x2="17.51"
                                                y2="6.5"
                                            />
                                        </svg>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a
                                        href="javascript:void(0)"
                                        className="rounded"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-twitter fea icon-sm fea-social"
                                        >
                                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                        </svg>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a
                                        href="javascript:void(0)"
                                        className="rounded"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-linkedin fea icon-sm fea-social"
                                        >
                                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                            <rect
                                                x={2}
                                                y={9}
                                                width={4}
                                                height={12}
                                            />
                                            <circle cx={4} cy={4} r={2} />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                            {/*end icon*/}
                        </div>
                    </div>
                    {/*end col*/}
                </div>
                {/*end row*/}
            </div>
            {/*end container*/}
            <div className="footer-py-30 footer-bar bg-footer">
                <div className="container text-center">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="text-center">
                                <p className="mb-0">
                                    © 2022 Landrick. Design with{' '}
                                    <i className="mdi mdi-heart text-danger" />{' '}
                                    by{' '}
                                    <a
                                        href="../../index.html"
                                        target="_blank"
                                        className="text-reset"
                                    >
                                        Shreethemes
                                    </a>
                                    .
                                </p>
                            </div>
                        </div>
                        {/*end col*/}
                    </div>
                    {/*end row*/}
                </div>
                {/*end container*/}
            </div>
        </footer>
    );
};

export default Footer;
