import { Callback } from 'yup/lib/types';
import { Firebase } from '../../../core/firebase/firebase';
import { store } from '../../../core/redux/store/store';
import { Model } from '../../../library/model/model';
import { Toastr } from '../../../library/notifier/toastr';
import { addTopic, setTopics } from '../redux/action/topic.action';
import { Topic } from './topic';

export class TopicModel extends Model<Topic> {
    private static readonly path = 'topic';

    private static get topicCollection() {
        return Firebase.database<Topic>(TopicModel.path);
    }

    /**
     * Makes an instance of topic model
     * @param topic
     * @returns
     */
    public static make(topic: Topic): TopicModel {
        return new TopicModel(topic);
    }

    /**
     * Uploads image for topics
     * @param file
     * @param callback
     * @returns
     */
    public static async uploadImage(file: File, callback: Callback) {
        return Firebase.storage(TopicModel.path + '/').upload(file, callback);
    }

    /**
     * Creates a new topic
     * @param topic
     */
    public static async createTopic(topic: Topic) {
        await this.topicCollection.create(topic);
        await store.dispatch(addTopic(topic));
        Toastr.fire('Topic created successfully.').success();
    }

    /**
     * Makes collection of topics
     */
    public static async makeTopicCollection(): Promise<void> {
        const topics: Topic[] = await this.topicCollection.syncAll();
        store.dispatch(setTopics(topics));
    }
}
