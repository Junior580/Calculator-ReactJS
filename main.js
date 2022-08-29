function teste(name) {
    const promisse = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (name) {
                console.log(name);
                resolve();
            } else {
                reject();
            }
        }, 1000);
    });
    return promisse;
}
function resolve() {
    console.log("resolve");
}
function reject() {
    console.log("reject");
}

teste("bombum")
    .then(resolve)
    .catch((err) => {
        console.log(err);
    });
