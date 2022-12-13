interface Query{
    name: string
    value: string
}

/// let x = { username: "ismail", password: "123456" }; 
///  const response = await axios.get(toPath("/login", x));
export function toPath(path: string, query: Query) {
    return `${path}${query != null ? `?${query.name}=${query.value}` : ""}`;
}


