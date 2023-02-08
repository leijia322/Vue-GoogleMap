import axios from 'axios'

/*
@Param type:
    private-guides
    local-experiences
    home-restaurants
    home-stays
    travel-requests
*/

export const getServiceNotice = ({ type = 'private-guides', viewType = 'map' }) => {
    return new Promise((resolve, reject) => {
        const token = 'oEs8lYJC9RSnAUBb1C5XjBpAYDqXHWdbh6nLfxBK'

        axios
            .get('https://zen100.localguides.travel/api/users/service-notices', {
                params: {
                    type: type,
                    viewType: viewType,
                },
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((resp) => {
                resolve(resp.data)
            })
            .catch((err) => {
                reject(err)
            })
    })
}