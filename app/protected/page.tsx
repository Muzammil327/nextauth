'use client'
import { useSession, signIn } from 'next-auth/react';

const ProtectedPage = () => {
    const { data: session } = useSession();

    if (!session) {
        return (
            <div>
                <h1>You must be logged in to view this page</h1>
                <button onClick={() => signIn()}>Sign in</button>
            </div>
        );
    }

    return (
        <div>
            <h1>Protected Page</h1>
            <p>Welcome, {session.user?.name}</p>
        </div>
    );
};

export default ProtectedPage;
