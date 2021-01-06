import * as axios from "axios";

const instance = axios.create({
    //withCredentials: true,
    //baseURL: 'https://www.nicb.org/',
    // headers: {
    //     "API-KEY": "a1d40943-50a0-4e90-ab2b-5a86d35f7027"
    // }
});


export const vinCheckAPI = {
    getVinData11(vin) {
        return instance.post('https://www.google.com/recaptcha/api2/reload?k=6LcYETIUAAAAAKz6T9MxMEllN8yw0ffsErIbAGS-');
    },
    getVinData12(vin) {
        instance.get('https://www.google.com/js/bg/TkCY_WRdC-8-S9Z1uPiHQPAky6CJKRNMjvn7dd5fyWg.js');
    },
    getVinData13(vin) {
        instance.post('https://www.google.com/recaptcha/api2/userverify?k=6LcYETIUAAAAAKz6T9MxMEllN8yw0ffsErIbAGS-');
    },
    getVinData14(vin) {
        return instance.get(`https://www.nicb.org/vincheck_ajax?vin=` + vin)
    },
    getVinData2(vin) {
        return instance.get(`https://ownershipcost.vinaudit.com/getownershipcost.php?key=VA_DEMO_KEY&vin=` + vin + '&mileage_start=-1&mileage_year=-1&country=')
    },
    getVinData3(vin) {
        return instance.get(`https://marketvalue.vinaudit.com/getmarketvalue.php?key=1HB7ICF9L0GVH5Q&vin=` + vin + '&period=182&mileage=null&country=USA')
    },

    getVinDataNode1(vin) {
        //return instance.get(`http://localhost:3000/vin=` + vin)
        //return instance.get(`http://localhost:3000/`)
        //return instance.get(`http://localhost:3000/about?vin=` + vin) //yo1 last
        return instance.get(`http://vinchecknode-env.eba-7fef4ktn.us-east-2.elasticbeanstalk.com/about?vin=` + vin) //yo1 last

        /*return instance.get(`http://localhost:3000/about?vin=` + vin,)
            .then(response => {
                    return response.data;
                }
            )*/
    },
    getVinDataNode2(url) {
        return instance.get(url)
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


