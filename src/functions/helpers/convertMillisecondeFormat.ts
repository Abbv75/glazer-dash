export const convertMillisecondeFormat = (value: number | undefined) => {
    if (!value) return 0;

    const date = new Date(value);
    const minute = date.getMinutes();
    return `${minute < 10 ? `0${minute}` : minute}:${date.getSeconds()}`;
}