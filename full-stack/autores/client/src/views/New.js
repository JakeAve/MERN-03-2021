import React from 'react';
import { Redirect } from 'react-router';
import NewAuthorForm from '../components/NewAuthorForm/NewAuthorForm';
import { useUser } from '../contexts/userContext';

const New = () => {
    const { user } = useUser();
    console.log({ userfromNew: user });

    if (!user) return <Redirect to="/" />;
    return (
        <div>
            <NewAuthorForm />
        </div>
    );
};

export default New;
