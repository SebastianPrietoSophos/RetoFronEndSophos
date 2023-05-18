export interface AppointmentsModel {
    id: number,
    date: string,
    hour: string,
    tests : {
        id : number,
        nombre : string,
        description : string
        },
    affiliates : {
        id : number,
        nombre : string,
        age : number,
        mail : string
        }
}
export interface AppointmentsModelForPost {
    date: string,
    hour: string,
    tests : {
        id : number
        },
    affiliates : {
        id : number
        }
}
