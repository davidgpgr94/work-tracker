
export const KEYS = {
  lastPath: 'lastPath'
}

export const saveItem = (key, item) => {
  if (Object.keys(KEYS).includes(key)) {
    localStorage.setItem(key, JSON.stringify(item));
  }
}

export const getItem = (key) => {
  if (Object.keys(KEYS).includes(key)) {
    return JSON.parse(localStorage.getItem(key));
  }
}

export const removeItem = (key) => {
  if (Object.keys(KEYS).includes(key)) {
    localStorage.removeItem(key);
  }
}

export const purge = () => {
  localStorage.clear();
}
