import { useState } from "react";

export const useLocalStorage = (keyName : string, defaultValue : string) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(keyName);
      if (value) {
        return JSON.parse(value);
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (error) {
      console.log(error);
      return defaultValue;
    }
  });
  const setValue = (newValue : string) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) {
      console.log(err);
    }
    setStoredValue(newValue);
  };

  const getItem = (itemKey: string) => {
  try {
    const value = window.localStorage.getItem(itemKey);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.log(error);
    return null;
  }
};
  return [storedValue, setValue, getItem];
};