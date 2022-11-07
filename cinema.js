
/**
 * 
 * @param {Number} card  - person's cinema card
 * @param {Number} ticket - ticket's price
 * @param {Number} perc = fraction of what he paid for the previous ticket
 * @returns  {Number} =how many times a person must go  to the cinema
 * so system be will bea cheaper than system b
 */
function movie(card, ticket,perc){
    let cheaperTicket = ticket
    let result = 0
    let completeTicket = 0
    

    while(card>completeTicket){
        cheaperTicket *= perc 
        completeTicket += ticket
        
        card += cheaperTicket 
        result++
    }
    return result
}


console.log(movie(500, 15, 0.9))