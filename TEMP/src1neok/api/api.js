import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://www.nicb.org/',
    // headers: {
    //     "API-KEY": "a1d40943-50a0-4e90-ab2b-5a86d35f7027"
    // }
});


export const vinCheckAPI = {
    getVinData(vin) {
        return instance.get(`vincheck_ajax?vin=` + vin)
    },
    // getStatus(userId) {
    //     return instance.get(`profile/status/` + userId)
    // },
    // updateStatus(status) {
    //     return instance.put(`profile/status`, {status: status})
    // },
    // savePhoto(photoFile) {
    //     const formData = new FormData();
    //     formData.append("image", photoFile);
    //
    //     return instance.put(`profile/photo`, formData, {
    //         headers: {
    //             'Content-Type': 'multipart/form-data'
    //         }
    //     })
    // },
    // saveProfile(profile) {
    //     return instance.put(`profile`, profile)
    // }
}


