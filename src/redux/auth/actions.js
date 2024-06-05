import authAPI from '@/services/auth.api';

export const singLogin = async (payload) => {

    try {
        const response = await authAPI.login(payload);
        const { access_token, user } = response

        localStorage.setItem('user', JSON.stringify({ access_token, user }));

        return {
            ok: true,
            access_token,
            user,
        };

    } catch (error) {
        return {
            ok: false,
            error,
        };
    }
}