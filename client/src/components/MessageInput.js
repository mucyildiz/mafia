import { useState } from 'react';

export default function MessageInput(props) {
    const [value, setValue] = useState('');
    const submitForm = (e) => {
        e.preventDefault();
        props.socket.emit('message', value);
        setValue('');
    }

    return(
        <form onSubmit={submitForm}>
            <input
                autoFocus
                value={value}
                placeholder="Type your message"
                onChange={(e) => {
                    setValue(e.currentTarget.value);
                }}
            />
        </form>
    )
}