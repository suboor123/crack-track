import React from 'react'

export default function QuestionsOnPage() {
  return (
    <div className="row align-items-center">
    <div className="col-lg-9 col-md-8">
      <div className="section-title">
        <span className="text-muted me-3">Showing 1 - 15 out of 452</span>
      </div>
    </div>
    <div className="col-lg-3 col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
      <div className="form custom-form">
        <select className="form-select form-control" aria-label="Default select example" id="Sortbylist-job">
          <option selected>All Jobs</option>
          <option>Full Time</option>
          <option>Part Time</option>
          <option>Remote</option>
          <option>Work From Home</option>
        </select>
      </div>
    </div>
  </div>
  )
}
