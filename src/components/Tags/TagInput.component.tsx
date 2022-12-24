import React, { ReactNode } from 'react';
import { Button, TagPicker, Tag, TagInput } from 'rsuite';
import { ItemDataType } from 'rsuite/esm/@types/common';
import { Firebase } from '../../core/firebase/firebase';
import { Toastr } from '../../library/notifier/toastr';
import { DrawerComponent } from '../Drawer/Drawer.component';
import { TAG_PATH, getRandomTagColor, ITag } from './tag.model';

interface Props {
    onSelectTag: (tagIds: string[]) => void;
    data?: any[];
}

export default function TagField(props: Props) {
    const [showDrawer, setShowDrawer] = React.useState(false);
    const [tagData, setTagData] = React.useState([]);

    const closeDrawer = () => setShowDrawer(false);
    const openDrawer = () => setShowDrawer(true);

    const [addedTags, setAddedTags] = React.useState([]);

    const onAddTag = () => {
        if (addedTags.length === 0) {
            Toastr.fire('Add at least one new tag', 'No new tag').error();
            return;
        }

        const tagList: ITag[] = addedTags.map((tag: string) => ({
            tagName: tag,
        }));
        Firebase.database<ITag>(TAG_PATH).createMultiple(tagList);

        closeDrawer();
        Toastr.fire('Tag(s) added successfully.', 'Great!').success();
    };

    React.useEffect(() => {
        const getTags = async () => {
            const response = await Firebase.database(TAG_PATH).syncAll();
            const tagOptions = response?.map((tag: any) => {
                return {
                    label: tag.tagName,
                    value: tag.uid,
                    color: getRandomTagColor(),
                };
            });
            setTagData((tagOptions as []) || []);
        };
        getTags();
    }, [showDrawer]);

    return (
        <>
            <div className="col-lg-12">
                <div className="mb-3">
                    <label className="form-label">
                        Tags
                        <span className="text-danger mr-3">*</span>
                    </label>
                    <div
                        className="float-right"
                        style={{
                            float: 'right',
                        }}
                    >
                        <Button
                            size="xs"
                            appearance="primary"
                            onClick={openDrawer}
                        >
                            <i className="uil uil-plus align-middle me-1"></i>
                            Add new tags
                        </Button>
                    </div>
                    <div className="form-icon position-relative">
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
                            className="feather feather-user fea icon-sm icons"
                        >
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx={12} cy={7} r={4} />
                        </svg>
                        <TagPicker
                            onChange={(tagIds: string[]) => {
                                props.onSelectTag(tagIds);
                            }}
                            data={tagData}
                            defaultValue={props.data || []}
                            block
                            placeholder="Choose tags"
                        />
                    </div>
                </div>
            </div>

            <DrawerComponent
                open={showDrawer}
                onClose={closeDrawer}
                size="full"
                hasHeader={{
                    enable: true,
                    title: 'Add Tag',
                    buttonName: 'Add',
                    onBtnClick: onAddTag,
                }}
            >
                <div className="p-5">
                    <label htmlFor="">
                        <i className="uil uil-label align-middle me-1"></i> You
                        can enter multiple tags and add them
                    </label>
                    <TagInput
                        block
                        placeholder="Enter tags"
                        trigger={'Enter'}
                        data={[]}
                        onChange={(tags: string[]) => {
                            setAddedTags(tags as any);
                        }}
                    />

                    <div className="mt-5" id="predefined_tags">
                        <label htmlFor="" className="mb-1">
                            <i className="uil uil-tag align-middle me-1"></i>{' '}
                            predefined tags:
                        </label>{' '}
                        <br />
                        {tagData &&
                            tagData.map((tag: ItemDataType, index: number) => (
                                <Tag
                                    size="md"
                                    closable
                                    key={index}
                                    color={tag.color as any}
                                >
                                    {' '}
                                    {tag.label}
                                </Tag>
                            ))}
                    </div>
                </div>
            </DrawerComponent>
        </>
    );
}
