

export const fadeBigIn = (direction, delay) => {
    return{
        hidden: {
            y: direction === 'up'? 100 : direction === 'down'? -100 : 0,
            x: direction === 'left'? 100 : direction === 'right'? -100 : "0",
            opacity: 0
        }, 
        show: {
           y: 0,
           x: 0,
           opacity: 1,
            transition: {
                type: 'tween',
                duration: 0.5,
                delay: 0.1,
            }
        }
    }
}


export const fadeSmallIn = (direction, delay) => {
    return{
        hidden: {
            y: direction === 'up'? 10 : direction === 'down'? -10 : 0,
            x: direction === 'left'? 10 : direction === 'right'? -10 : 0,
            opacity: 0
        }, 
        show: {
           y: 0,
         x: 0,
         opacity: 1,
            transition: {
                type: 'tween',
                duration: 0.5,
                delay: 0.1,
            }
        }
    }
}