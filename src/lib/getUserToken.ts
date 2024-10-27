import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode'; // Use named import

// Custom interface
interface CustomJwtPayload {
    userId: string; // Adjust the type according to your needs
}

// Function to get userId from the token
export const getUserIdFromToken = () => {
    const token = Cookies.get('token'); // Get the token from cookies
    if (token) {
        try {
            const decodedToken = jwtDecode<CustomJwtPayload>(token); // Decode the token with custom type
            return decodedToken.userId; // Now TypeScript knows about userId
        } catch (error) {
            console.error("Error decoding token", error);
            return null;
        }
    }
    return null;
};
