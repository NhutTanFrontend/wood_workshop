export const checkOutOfStock = (x, set) => {
    let position = 0;

    if (x.length > 1) {
        for (const item of x) {
            if (item.outOfStock === false) {
                position = item.id
                break
            } else {
                continue
            }
        }

        set(position)
    } else if (x.length === 1) {
        if (x[0].outOfStock) {
            set(0)
        } else {
            set(1)
        }
    }
}