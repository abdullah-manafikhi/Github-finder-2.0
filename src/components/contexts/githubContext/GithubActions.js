const GITHUB_URL = "https://api.github.com"

export const userSearch = async (text) => {
    const params = new URLSearchParams({
        q: text
    })
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`)
    const {items} = await response.json()
    return items
}

export const userProfile = async (user) => {
    const response = await fetch(`${GITHUB_URL}/users/${user}`)
    const data= await response.json()
    return data
}

export const getRepos = async (user) => {
    const params = new URLSearchParams({
        sort: 'created',
        per_page: 10
    })
    const response = await fetch(`${GITHUB_URL}/users/${user}/repos?${params}`)
    const data= await response.json()
    return data
}