class Formatter {
  //add static methods here
  static capitalize(str){
    return `${str[0].toUpperCase()}${str.slice(1)}`
  }
  static sanitize(str){
    return str.replace(/[^A-Za-z0-9-'\s]+/g, "")
  }
  static titleize(str){
    return str.replace(/\w+/g, (match, startIndex) =>{
      const dontCapitalize = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from']
      
      return dontCapitalize.includes(match) && startIndex ? match : `${match[0].toUpperCase()}${match.slice(1)}`
    })
  }
}
