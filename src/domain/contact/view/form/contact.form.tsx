import React from 'react'

export default function ContactForm() {
  return (
    <form method="post" name="myForm" id="myForm" >
    <p id="error-msg" className="mb-0" />
    <div id="simple-msg" />
    <div className="row">
        <div className="col-md-6">
            <div className="mb-3">
                <label className="form-label">Your Name <span className="text-danger">*</span></label>
                <div className="form-icon position-relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user fea icon-sm icons"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx={12} cy={7} r={4} /></svg>
                    <input name="name" id="name" type="text" className="form-control ps-5" placeholder="Name :" />
                </div>
            </div>
        </div>
        <div className="col-md-6">
            <div className="mb-3">
                <label className="form-label">Your Email <span className="text-danger">*</span></label>
                <div className="form-icon position-relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail fea icon-sm icons"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                    <input name="email" id="email" type="email" className="form-control ps-5" placeholder="Email :" />
                </div>
            </div>
        </div>
        <div className="col-12">
            <div className="mb-3">
                <label className="form-label">Subject</label>
                <div className="form-icon position-relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-book fea icon-sm icons"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
                    <input name="subject" id="subject" className="form-control ps-5" placeholder="subject :" />
                </div>
            </div>
        </div>
        <div className="col-12">
            <div className="mb-3">
                <label className="form-label">Comments <span className="text-danger">*</span></label>
                <div className="form-icon position-relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle fea icon-sm icons clearfix"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                    <textarea name="comments" id="comments" rows={4} className="form-control ps-5" placeholder="Message :" defaultValue={""} />
                </div>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col-12">
            <div className="d-grid">
                <button type="submit" id="submit" name="send" className="btn btn-primary">Send Message</button>
            </div>
        </div>
    </div>{/*end row*/}
</form>
  )
}
