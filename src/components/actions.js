export function addRestaurant(name){
    return {type: 'ADD_RESTAURANT', payload: name}
}

export function deleteRestaurant(id){
    return {type: 'DELETE_RESTAURANT', payload: id}
}

export function addReview(review) {
    return { type: 'ADD_REVIEW', review: review}
}

export function deleteReview(id){
    return {type: 'DELETE_REVIEW', payload: id}
}