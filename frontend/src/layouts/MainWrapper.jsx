import { useEffect, useState } from 'react';
import { setUser } from '../utils/auth';

const MainWrapper = ({ children }) => {
    // Initialize the 'loading' state variable and set its initial value to 'true'
    const [loading, setLoading] = useState(true);

    // Define a useEffect hook to handle side effects after component mounting
    useEffect(() => {
        // Define an asynchronous function 'handler'
        const handler = async () => {
            // Set the 'loading' state to 'true' to indicate the component is loading
            setLoading(true);

            // Perform an asynchronous user authentication action
            await setUser();

            // Set the 'loading' state to 'false' to indicate the loading process has completed
            setLoading(false);
        };

        // Call the 'handler' function immediately after the component is mounted
        handler();
    }, []);

    // Render content conditionally based on the 'loading' state
    return <>{loading ? null : children}</>;
};

export default MainWrapper;
