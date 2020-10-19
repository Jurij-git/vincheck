import * as axios from "axios";

const instance = axios.create({
    //withCredentials: true,
    //baseURL: 'https://www.nicb.org/',
    // headers: {
    //     "API-KEY": "a1d40943-50a0-4e90-ab2b-5a86d35f7027"
    // }
});


export const vinCheckAPI = {
    getVinData1(vin) {
        return instance.get(`https://www.nicb.org/vincheck_ajax?vin=` + vin)
    },
    getVinData2(vin) {
        return instance.get(`https://ownershipcost.vinaudit.com/getownershipcost.php?key=VA_DEMO_KEY&vin=` + vin + '&mileage_start=-1&mileage_year=-1&country=')
    },
    getVinData3(vin) {
        return instance.get(`https://marketvalue.vinaudit.com/getmarketvalue.php?key=1HB7ICF9L0GVH5Q&vin=` + vin + '&period=182&mileage=null&country=USA')
    }
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


