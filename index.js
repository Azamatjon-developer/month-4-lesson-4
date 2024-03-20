//  1 task starts 


// const tub_number = (yourNumber) => {
//     let count = 0 

//     for (let i = 1 ; i <= yourNumber; i++) {
//         if(yourNumber % i == 0) {
//             count++
//         }

//     }

//     if (count === 2) {

//         console.log(" Your number is TUBNUMBER")

//     }else{
//         console.log("  your number is not TUBNUMBER")
//     }
// }

// tub_number(100)


// 1 tasks finished 


// 2 task starts 

const  perfectN = function (number) {
    if(number) {
        let total = 0 

        for (let i = 1 ; i < number ; i++) {
            if(number % i == 0) {
                total+=i

            }
        }
        if(number === total) {
            return 'Bu mukammal son'

        }else {
            return 'Bu mukammal son emas '
        }
    }else{
        return 'Bu nomer chaqirilmagan'
    }

}

perfectN(6)