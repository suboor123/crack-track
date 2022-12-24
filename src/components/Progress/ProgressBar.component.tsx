import React from 'react'

interface Props {
    title: string;
    progress: number;
}

export default function ProgressBar(props: Props) {
  return (
    <div className="progress-box mt-4">
    <h6 className="title text-muted mb-2">{props.title}</h6>
    <div className="progress">
        <div className="progress-bar position-relative bg-primary" style={{ width: `${props.progress}%` }}>
            <div className="progress-value d-block text-muted h6">{props.progress}%</div>
        </div>
    </div>
</div>
  )
}
