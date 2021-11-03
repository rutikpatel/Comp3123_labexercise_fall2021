const resolved = () => {
    return new Promise((resolve, reject) => {
        console.log("Message started")
        setTimeout(() => {
            resolve({'message':'Delayed Success!'});
        }, 500);
    });
}
const rejected = () => {
    return new Promise((resolve, reject) => {
        console.log("Error started")
        setTimeout(() => {
            reject({'error': 'Delay Expection!'});
        }, 500);
    });
}

resolved().then(res => console.log(res))
rejected().catch(err => console.log(err))