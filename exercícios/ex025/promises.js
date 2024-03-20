
const walkDog = () => {
    
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            
            const walkedDog = true
            if(walkedDog == true){
                resolve('Você andou com o cachorro')
            }
            else{
                reject('Você não andou com o cachorro')
            }
            
        }, 2000)

    })      
}

const cleanKitchen = () =>{

    return new Promise((a, reject) =>{
        setTimeout(() =>{
            const cleanedKitchen = true

            if(cleanedKitchen){
                a('Você limpou a cozinha')
            }

            else{
                reject('Você não limpou a cozinha')
            }
        }, 3000)
    })
}

const takeTrash = () =>{

    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            const takedTrash = true
            
            if(takedTrash){
                resolve('Você tirou o lixo')
            }

            else{
                reject('Você não tirou o lixo')
            }
        }, 500)
    })
}

async function fazerTarefas() {

    try{
        const walkDogResult = await walkDog()
        console.log(walkDogResult)
        const cleanKitchenResult = await cleanKitchen()
        console.log(cleanKitchenResult)
        const takedTrashResult = await takeTrash()
        console.log(takedTrashResult)
        console.log('Parabéns! Você terminou todas suas tarefas')
    }

    catch(error){
        console.error(error)
    }


}

fazerTarefas()