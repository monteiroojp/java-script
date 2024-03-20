
export let PI = Math.PI

export const getCircunference = (radius) =>{
    return 2*PI*radius
}

export const getArea = (radius) =>{
    return PI*(radius**2)
}

export const getVolume = (radius, height) =>{
    return PI*(radius**2)*height
}