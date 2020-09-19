//Restaurant Actions

export function addRestaurant(name){
    return { type: 'ADD_RESTAURANT', payload: name}
}

export function removeRestaurant(id){
    return { type: 'REMOVE_RESTAURANT', payload: id}
}


//Review Actions
export function addReview(review) {
    return { type: 'ADD_REVIEW', payload: review}
}

export function removeReview(id) {
    return { type: 'REMOVE_REVIEW', payload: id}
}