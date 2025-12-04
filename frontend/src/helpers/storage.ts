import type { Voter } from "../Shared/Types";

interface ItemWithExpiry {
    value: Voter; // set any for general purpose
    expiry: number;
}

export const setWithExpiry = (key: string, value: Voter, time: number) => {
    const now = new Date();

    const item = {
        value: value,
        expiry: now.getTime() + time,
    }
    
    localStorage.setItem(key, JSON.stringify(item))
}

export const getWithExpiry = (key: string) => {
    const itemJSON = localStorage.getItem(key);

    if (!itemJSON) return null;

    const item: ItemWithExpiry = JSON.parse(itemJSON);
    const now = new Date();

    if (now.getDate() > item.expiry) {
        localStorage.removeItem(key);
        return null
    }

    return item.value;
}