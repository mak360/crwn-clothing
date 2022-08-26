import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import { 
    auth,
    signInWithGooglePopup, 
    signInWithGoogleRedirect, 
    createUserDocumentFromAuth 
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
    // useEffect(async () => {
    //     const response = await getRedirectResult(auth);
    //     if(response){
    //         const userDocRef = await createUserDocumentFromAuth(response.user);
    //     }
    // }, []);
    useEffect(() => {
        const fetchResults = async () => {
          const response = await getRedirectResult(auth);
          if(response){
                const userDocRef = await createUserDocumentFromAuth(response.user);
          }
        } 
        
        fetchResults()
    }, []);
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>SignIn with Google</button>
            <button onClick={signInWithGoogleRedirect}>SignIn with Google Redirect</button>
        </div>
    );
}

export default SignIn;