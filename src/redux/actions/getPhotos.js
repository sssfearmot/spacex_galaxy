import axios from "axios";



export const getPhotos = (date) => async (dispatch, getState) => {

    dispatch({
        type: "FETCH_PHOTOS_REQUEST"
    })

    try {
        const response = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=`)
        dispatch({
            type: "FETCH_PHOTOS_SUCCESS",
            payload: response.data.photos
        })

    } catch (error) {
        dispatch({
            type: "FETCH_PHOTOS_FAILURE",
            error
        })
    }
}

