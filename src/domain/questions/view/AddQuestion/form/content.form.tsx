import React from 'react';
import Button from '../../../../../components/Button/Button.component';
import HTMLEditor from '../../../../../components/Editor/HtmlEditor.component';
import { IQuestionForm } from '../../../model/Question';


interface Props {
    onBackClick: () => void;
    onDoneClick: (content: string) => void;
    prevFormValues: IQuestionForm
    ref: any
}

const btnStyle = {
    float: 'right',
    marginRight: '20px'
}

const iconStyle = {
    fontSize: '40px',
    margin: '10px'
}

export default function QuestionContent(props: Props) {

    const [content, setContent] = React.useState('')

    return (
        <div {...props} ref={props.ref}>
            <header id="topnav-2" className=" sticky" >
                <i className="uil uil-arrow-left"
                    onClick={props.onBackClick}
                    style={iconStyle}></i>

                <div style={btnStyle as {}}>
                    <Button onClick={() => {
                        props.onDoneClick(content)
                    }}
                    >Done</Button>
                </div>
            </header>
            <HTMLEditor
            onChange={setContent}
                defaultValue={`
                <h3>${props.prevFormValues.title}</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae fugiat culpa, beatae quis exercitationem consequatur quos, facere illum amet, placeat quisquam libero. At, cupiditate neque facilis reprehenderit corrupti laboriosam sed?</p>

                `}
            ></HTMLEditor>
        </div>
    )
}

