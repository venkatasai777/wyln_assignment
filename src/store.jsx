
import {createStore} from 'redux'

const initialStore = {
    allPosts: [
        {
            id: 100,
            name: "wylo",
            content: "Something fresh is cooking. Something big yet small.Watch this space for more.If you love building communities, you'll love Wylo too.",
            image: 'https://res.cloudinary.com/ds86ihfbl/image/upload/v1720336770/image1_eespdb.jpg'
        },
        {
            id: 101,
            name: "Information Age",
            content: "Photographs of Australian children have been used to train generative artificial intelligence systems without their consent after they were included in a popular image dataset, an investigation by Human Rights Watch has found",
            image: 'https://res.cloudinary.com/ds86ihfbl/image/upload/v1720336518/image3_o0fuqm.jpg'
        },
        {
            id: 103,
            name: "Hindustan Times",
            content: "India weather news Highlights: Flood situation in Assam remains grim due to heavy rainfall, with major rivers flowing above the danger mark and nearly 24 lakh people affected. Heavy rainfall has affected people's lives in other states across India like Himachal Pradesh, Uttarakhand, Karnataka, Manipur etc. In Himachal Pradesh, 64 roads are closed due to heavy rain.",
            image: 'https://res.cloudinary.com/ds86ihfbl/image/upload/v1720336941/image5_zfu3aw.avif'
        },
    ]
}


function reducer(state=initialStore, action) {
    switch(action.type) {
        case "create" :
           const newState = {
            allPosts : [...state.allPosts, action.payload]
           }
           return newState
        case "update" :
            const prevStateList = state.allPosts.map(each => {
                if (each.id === action.payload.id){
                    return action.payload
                }else {
                    return each
                }
            })
            const updatedState = {
                allPosts : prevStateList
            }
            return updatedState
        case "delete" : 
            const filteredRes = state.allPosts.filter(each => each.id !== action.payload.id)
            alert('deleted successfully')
            return {
                allPosts: filteredRes
            }
        default :
            return state
    }
}



const store = createStore(reducer)



export default store