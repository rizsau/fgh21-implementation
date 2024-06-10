const FazzFood = (price, voucher, distance, tax) => {
    // const availableVoucher = ["FAZZFOOD50", "DITRAKTIR60"]
    const availableVoucher = {
        FAZZFOOD50: {
            minPrice: 50000,
            discPercentage: 50 / 100,
            maxDiscount: 50000
        },
        DITRAKTIR60: {
            minPrice: 25000,
            discPercentage: 60 / 100,
            maxDiscount: 30000
        }
    }
    if(!availableVoucher[voucher]){
        console.log("Voucher is not available")
        return
    }
    
    voucher = availableVoucher[voucher]
    
    if(price < voucher.minPrice){
        console.log("Voucher min order is invalid")
        return
    }

    let disc = price * voucher.discPercentage

    if(disc > voucher.maxDiscount){
        disc = voucher.maxDiscount
    }

    let deliveryFee = 5000
    if(distance > 2){
        deliveryFee += (distance - 2) * 3000
    }

    if(tax === true){
        tax = price * 5 / 100
    }else{
        tax = 0
    }

    const subTotal = price - disc + deliveryFee + tax

    console.log("Harga: " + price)
    console.log("Potongan: " + disc)
    console.log("Biaya antar: " + deliveryFee)
    console.log("Pajak: " + tax)
    console.log("Subtotal: " + subTotal)
}

FazzFood(75000, "DITRAKTIR60", 5, true) // false dianggap 0 jadi subTotal gak error
