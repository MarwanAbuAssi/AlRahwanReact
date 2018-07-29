import React from 'react';
import axios from 'axios'

class axiosService {
    post(url, data) {
      return  axios.post('https://alrahwanreact.firebaseio.com/reservation.json', data);
            // .then(response => {
            //     console.log(response.data);
            //     // dispatch(purchaseBurgerSuccess(response.data.name, orderData));
            // })
            // .catch(error => {
            //     console.log(error)
            //     // dispatch(purchaseBurgerFail(error));
            // });
    }
get(url){
        return axios.get(url);
}


}

export default new axiosService();