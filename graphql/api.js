import useFetch from '../lib/useFetch'

function getData(data) {
  if (!data || data.errors) return null
  return data.data
}

function getErrorMessage(error, data) {
  if (error) return error.message
  if (data && data.errors) {
    return data.errors[0].message
  }
  return null
}

export const usePosts = () => {
  const query = `query Posts($size: Int) {
    entries(_size: $size) {
      data {
        _id
        _ts
        title
        body
        author {
          name
          surname
        }
      }
      after
    }
  }`
  const size = 100
  const { data, error } = useFetch(process.env.FAUNADB_GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.FAUNADB_SECRET}`,
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query,
      variables: { size },
    }),
  })

  return {
    data: getData(data),
    errorMessage: getErrorMessage(error, data),
    error,
  }
}

export const createPost = async (title, body, author) => {
  const query = `mutation CreatePost($title: String!, $body: String!, $author: PostAuthorRelation!) {
    createPost(data: {
      title: $title,
      body: $body,
      author: $author,
    }) {
      _id
      _ts
      title
      body
      author {
        name
        surname
      }
    }
  }`

  const res = await fetch(process.env.FAUNADB_GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.FAUNADB_SECRET}`,
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query,
      variables: { title, body, author },
    }),
  })
  const data = await res.json()

  return data
}

export const useUsers = () => {
  const query = `query User($size: Int) {
    entries(_size: $size) {
      data {
        _id
        _ts
        title
        body
        author
      }
      after
    }
  }`
  const size = 100
  const { data, error } = useFetch(process.env.FAUNADB_GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.FAUNADB_SECRET}`,
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query,
      variables: { size },
    }),
  })

  return {
    data: getData(data),
    errorMessage: getErrorMessage(error, data),
    error,
  }
}

export const createUser = async (title, body, author) => {
  const query = `mutation CreateUser($username: String!, $name: String!, $surname: String!, imageUrl: String) {
    createUser(data: {
      username: "carlst"
      name: "Karol"
      surname: "Stępień"
      imageUrl: ""
    }) {
      _id
      _ts
      title
      body
      author
    }
  }`

  const res = await fetch(process.env.FAUNADB_GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.FAUNADB_SECRET}`,
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query,
      variables: { title, body, author },
    }),
  })
  const data = await res.json()

  return data
}