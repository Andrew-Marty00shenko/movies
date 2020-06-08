export const setCountryCode = async () => {
    const res = await fetch("http://ip-api.com/json");
    const result = await res.json();
    return result.countryCode
}