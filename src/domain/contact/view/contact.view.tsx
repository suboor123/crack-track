import React, { Component } from 'react'
import { DrawerComponent } from '../../../components/Drawer/Drawer.component';
import ContactForm from './form/contact.form';

function Contact() {

    const [showDrawer, setShowDrawer] = React.useState(false);

    const handleOpenDrawer = () => setShowDrawer(true);

    const handleCloseDrawer = () => setShowDrawer(false);

    return (
        <>
            <li><a onClick={handleOpenDrawer} className="sub-menu-item">Contact</a></li>

            <DrawerComponent
                open={showDrawer}
                onClose={handleCloseDrawer}
                size='full'
                hasHeader={{
                    enable: true,
                    title: `Let's talk!`,
                    onBtnClick: () => { },
                    buttonName: 'Send'
                }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-6 pt-2 pt-sm-0 order-2 order-md-1">
                            <div className="card shadow rounded border-0">
                                <div className="card-body">
                                    <h4 className="card-title">Get In Touch !</h4>
                                    <div className="custom-form mt-3">
                                        <ContactForm></ContactForm>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6 order-1 order-md-2">
                            <div className="card border-0">
                                <div className="card-body p-0">
                                    <img src="assets/images/contact.svg" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>{/*end row*/}
                </div>
            </DrawerComponent>
        </>
    )
}


export default Contact