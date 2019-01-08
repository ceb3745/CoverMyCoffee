import fetch from 'isomorphic-fetch';

export function createOrder(data) {
    return fetch('https://service.us.apiconnect.ibmcloud.com/gws/apigateway/api/20a1ee7a927cfb1daacc7c1af93995ab253f3127124e8e2391122cc8e7038f80/8c1873cc-b919-4458-ac90-d2664969b13b/order', {
        method: 'POST',
        headers: {
                    'Content-Type': 'application/json',
                    'X-Debug-Mode': 'true'
                },
        //mode: 'CORS',
        body: JSON.stringify(data),
    }).then(res => {
        console.log(res);
        return res;
    }).catch(err => {
        console.log(err);
        return err;
    });
}

const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};