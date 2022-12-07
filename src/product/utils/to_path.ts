interface Query{
    name: string
    value: string
}

/// let paginationQuery = { username: "ismail", password: "123456" }; 
///  const response = await axios.get(toPath("/login", paginationQuery));
export function toPath(path: string, query: Query) {
    return `${path}${query != null ? `?${query.name}=${query.value}` : ""}`;
}


