import { Message, Notification, toaster } from "rsuite";

type NotificationType = 'info' | 'success' | 'warning' | 'error'

export class Toastr {

    private message: string;
    private header: string | undefined;

    private constructor(message: string, header?: string) {
        this.message = message;
        this.header = header;
    }

    private createMessage = (type: NotificationType) =>
    (<Notification
        header={this.header || type} type={type} closable>
        {this.message}
    </Notification>);


    static fire = (message: string, header?: string) => new Toastr(message, header)

    private exec(type: NotificationType) {
        toaster.push(this.createMessage(type), { placement: 'topEnd' })
    }

    /**
     * Notification handlers
     */
    public success: () => void = () => this.exec('success');
    public error: () => void = () => this.exec('error');
    public warning: () => void = () => this.exec('warning');
    public info: () => void = () => this.exec('info');
}