export default (state = [], action) => {
  let quoteId
  let quotes
  if (action.quoteId) {
    quoteId = action.quoteId
  }
  switch(action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote]

    case "REMOVE_QUOTE":
      quotes = state.filter(quote => quote.id !== quoteId)
      return quotes

    case "UPVOTE_QUOTE":
      quotes = state.map(quote => {
        if (quote.id === quoteId) {
          quote.votes++
        }
        return quote
      })
      return quotes

    case "DOWNVOTE_QUOTE":
      quotes = state.map(quote => {
        if (quote.id === quoteId && quote.votes > 0) {
          quote.votes--
        }
        return quote
      })
      return quotes

    default:
      return state
  }
}
