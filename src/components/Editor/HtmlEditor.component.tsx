import { Component } from 'react';
import {
    EditorState,
    ContentState,
    DefaultDraftBlockRenderMap,
    convertFromHTML,
    convertToRaw,
} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import Immutable from 'immutable';
import draftToHtml from 'draftjs-to-html';

interface Props {
    defaultValue?: string;
    onChange: (content: string) => void;
}

export default class HTMLEditor extends Component<Props, any> {
    constructor(props: Props) {
        super(props);
        this.state = {
            editorState: EditorState.createWithContent(
                ContentState.createFromText('')
            ),
        };

        if (props.defaultValue) {
            const html = props.defaultValue;
            const contentBlock = convertFromHTML(html);
            if (contentBlock) {
                const contentState = ContentState.createFromBlockArray(
                    contentBlock.contentBlocks
                );
                const editorState = EditorState.createWithContent(contentState);
                this.state = {
                    editorState,
                };
            }
        }
    }

    onEditorStateChange = (editorState: EditorState) => {
        this.setState({
            editorState,
        });
        const content = draftToHtml(
            convertToRaw(editorState.getCurrentContent())
        );
        this.props.onChange(content);
    };

    blockRenderMap = Immutable.Map({
        section: {
            element: 'section',
        },
        table: {
            element: 'table',
        },
        tr: {
            element: 'tr',
        },
        td: {
            element: 'td',
        },
        th: {
            element: 'th',
        },
    });
    extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(
        this.blockRenderMap
    );

    render() {
        const { editorState } = this.state;
        return (
            <div className="html-editor-wrapper">
                <Editor
                    editorState={editorState}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    onEditorStateChange={this.onEditorStateChange}
                    toolbarCustomButtons={[]}
                    placeholder={'Start typing...'}
                />
            </div>
        );
    }
}
