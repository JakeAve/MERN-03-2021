import React from 'react';
import { useUser } from '../providers/UserProvider';

const Message = (props) => {
    const { mensaje, tiempo, usuario } = props;
    const { user } = useUser();
    const isSelf = usuario === user;
    return (
        <div className={'message-container' + (isSelf ? ' self' : '')}>
            <div className={'message' + (isSelf ? ' self' : '')}>
                <div className="content">{mensaje}</div>
                <div className="message-meta">
                    {new Date(tiempo).toLocaleTimeString()}{' '}
                    {isSelf ? 'Usted' : usuario}
                </div>
            </div>
        </div>
    );
};

export default Message;
