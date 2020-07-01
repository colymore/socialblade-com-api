# Socialblade.com Scraping for Instagram data (Forked from [https://github.com/DavideViolante/socialblade-com-api](https://github.com/DavideViolante/socialblade-com-api))

Used instagram API and added user-agent to bypass 403 error.

### Install
`npm i socialblade-instagram-com-api`

### Example
```js
const { socialblade } = require('socialblade-instagram-com-api')

async function main () {
  const response = await socialblade('cristiano')
  /**
   * response = 
   * [
   *   {
   *     date: '2020/05/26',
   *     followersDelta: 5657,
   *     followers: 117937431,
   *     followingDelta: -7,
   *     following: 605960,
   *     postsDelta: 0,
   *     posts: 15811
   *   },
   *   ...
   * ]
   */
}
```

### Run tests
- `npm test`

### Run lint
- `npm run lint`

### Author
- [Colymore](https://github.com/colymore/)
### Original author
- [DavideViolante](https://github.com/DavideViolante/)
