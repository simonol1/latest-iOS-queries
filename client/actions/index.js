import request from 'superagent'

export const receivePost = (posts) => {
  return {
    type: 'RECEIVE_POSTS',
    posts: posts.map(post => post.data)
  }
}

export function fetchPosts () {
  return (dispatch) => {
    request
      .get('https://api.stackexchange.com/2.2/search?order=desc&sort=activity&tagged=ios&site=stackoverflow')
      .end((err, res) => {
       err ? dispatch(setErrorMessage("ERROR:" + err.message)) : dispatch(receivePost(res.body))
     })
    }
  }
