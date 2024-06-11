import _ from "lodash";

export const handleAddProduct = (id, name, price, amount, color, sharp, material, image) => {

    const getInfo = {
        id: id,
        name: name,
        price: price,
        amount: amount,
        color: color,
        sharp: sharp,
        material: material,
        image: image
    }

    const getData = localStorage.getItem("selectedProduct");

    if (getData) {
        const dataJson = JSON.parse(getData);

        let checkArray = true
        _.find(dataJson, function (obj) {
            if (obj.id === getInfo.id) {
                _.update(getInfo, 'amount', function (n) {
                    return obj.amount + Number(n)
                })
                return checkArray = true
            } else {
                return checkArray = false
            }
        })

        if (checkArray) {
            try {
                const dataAfterFil = dataJson.filter(item => item.id !== getInfo.id)
                const dataPrepare = dataAfterFil.concat(getInfo);
                localStorage.setItem("selectedProduct", JSON.stringify(dataPrepare));
            } catch (err) {
                console.log(err)
            }
        } else {
            try {
                const dataPrepare = dataJson.concat(getInfo);
                localStorage.setItem("selectedProduct", JSON.stringify(dataPrepare));
            } catch (err) {
                console.log(err)
            }
        }
    } else {
        let data = [];
        const dataPrepare = data.concat(getInfo);
        localStorage.setItem("selectedProduct", JSON.stringify(dataPrepare));
    }
}