const api_key = "b06d26f077f7cb6c5417fe25767b033e";

export const setCountryCode = async () => {
    const res = await fetch("http://ip-api.com/json");
    const result = await res.json();
    return result.countryCode
}

export const getSession = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${api_key}`);
    const result = await res.json();
    return result.guest_session_id
}