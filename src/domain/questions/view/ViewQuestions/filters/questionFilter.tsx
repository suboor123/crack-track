import React from 'react'

export default function QuestionFilter() {
  return (
    <div className="col-lg-4 col-md-6 col-12">
    <div className="sidebar p-4 rounded shadow">
      {/* SEARCH */}
      <div className="widget">
        <form role="search" method="get">
          <div className="input-group mb-3 border rounded">
            <input type="text" id="s" name="s" className="form-control border-0" placeholder="Search Keywords..." />
            <button type="submit" className="input-group-text bg-transparent border-0" id="searchsubmit"><i className="uil uil-search" /></button>
          </div>
        </form>
      </div>
      {/* SEARCH */}
      {/* Categories */}
      <div className="widget mb-4 pb-4 border-bottom">
        <h5 className="widget-title">Categories</h5>
        <div className="mt-4 mb-0">
          <select className="form-select form-control" aria-label="Default select example">
            <option selected>All Jobs</option>
            <option>Digital &amp; Creative</option>
            <option>Accountancy</option>
            <option>Banking</option>
            <option>IT Contractor</option>
            <option>Graduate</option>
            <option>Estate Agency</option>
          </select>
        </div>
      </div>
      {/* Categories */}
      {/* Posted */}
      <div className="widget mb-4 pb-4 border-bottom">
        <h5 className="widget-title">Date Posted</h5>
        <div className="mt-4">
          <div className="form-check mb-0">
            <input className="form-check-input" defaultChecked type="radio" name="flexRadioDefault" id="lasthour" />
            <label className="form-check-label" htmlFor="lasthour">Last Hour</label>
          </div>
          <div className="form-check mb-0">
            <input className="form-check-input" defaultChecked type="radio" name="flexRadioDefault" id="oneday" />
            <label className="form-check-label" htmlFor="oneday">Last 24 hours</label>
          </div>
          <div className="form-check mb-0">
            <input className="form-check-input" defaultChecked type="radio" name="flexRadioDefault" id="sevenday" />
            <label className="form-check-label" htmlFor="sevenday">Last 7 days</label>
          </div>
          <div className="form-check mb-0">
            <input className="form-check-input" defaultChecked type="radio" name="flexRadioDefault" id="fourteenhour" />
            <label className="form-check-label" htmlFor="fourteenhour">Last 14 days</label>
          </div>
          <div className="form-check mb-0">
            <input className="form-check-input" defaultChecked type="radio" name="flexRadioDefault" id="onemonth" />
            <label className="form-check-label" htmlFor="onemonth">Last 30 days</label>
          </div>
        </div>
      </div>
      {/* Posted */}
      {/* Job Type */}
      <div className="widget mb-4 pb-4 border-bottom">
        <h5 className="widget-title">Job Type</h5>
        <div className="mt-4">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="contract" />
            <label className="form-check-label" htmlFor="contract">Contract Base</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="freelancer" />
            <label className="form-check-label" htmlFor="freelancer">Freelancer</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="fulltime" />
            <label className="form-check-label" htmlFor="fulltime">Full Time</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="parttime" />
            <label className="form-check-label" htmlFor="parttime">Part Time</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="remote" />
            <label className="form-check-label" htmlFor="remote">Remote</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="intern" />
            <label className="form-check-label" htmlFor="intern">Intership</label>
          </div>
        </div>
      </div>
      {/* Job Type */}
      {/* Posted */}
      <div className="widget">
        <h5 className="widget-title">Experience</h5>
        <div className="mt-4">
          <div className="form-check mb-0">
            <input className="form-check-input" defaultChecked type="radio" name="flexRadioDefault2" id="fresher" />
            <label className="form-check-label" htmlFor="fresher">Fresher</label>
          </div>
          <div className="form-check mb-0">
            <input className="form-check-input" defaultChecked type="radio" name="flexRadioDefault2" id="oneyear" />
            <label className="form-check-label" htmlFor="oneyear">+1 Year</label>
          </div>
          <div className="form-check mb-0">
            <input className="form-check-input" defaultChecked type="radio" name="flexRadioDefault2" id="twoyear" />
            <label className="form-check-label" htmlFor="twoyear">+2 Year</label>
          </div>
          <div className="form-check mb-0">
            <input className="form-check-input" defaultChecked type="radio" name="flexRadioDefault2" id="3year" />
            <label className="form-check-label" htmlFor="3year">+3 Year</label>
          </div>
          <div className="form-check mb-0">
            <input className="form-check-input" defaultChecked type="radio" name="flexRadioDefault2" id="fiveyear" />
            <label className="form-check-label" htmlFor="fiveyear">+5 Year</label>
          </div>
        </div>
      </div>
      {/* Posted */}
    </div>
  </div>
  )
}
