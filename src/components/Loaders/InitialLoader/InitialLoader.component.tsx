import { Loader } from 'rsuite'
import "./initialLoader.css"
const InitialLoader = () => {
    return (
        <section className="bg-home d-flex align-items-center bg-white" id="initial-loader" >
            <div className="bg-white" />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-12 text-center">
                        <div id="loaderInverseWrapper" style={{ height: '100vh' }}>
                            <Loader inverse size="lg" center />
                        </div>
                    </div>
                </div>

            </div>
        </section>

    )
}

export default InitialLoader