export const actionIds = {
    SELECT_MESSAGE: 'SELECT_MESSAGE',
    LOAD_MESSAGES: 'LOAD_MESSAGES',
    MESSAGE_SELECTED: 'MESSAGE_SELECTED',
    MESSAGES_LOADED: 'MESSAGES_LOADED',
    MESSAGE_MARK_READ: 'MESSAGE_MARK_READ',
    MESSAGE_MARK_UNREAD: 'MESSAGE_MARK_UNREAD',
    MESSAGE_ARCHIVE: 'MESSAGE_ARCHIVE',
};

export interface BaseAction {
    type: string;
    payload: any;
}