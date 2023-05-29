export interface Appointments{

    id: number,
    date: string,
    hour: string,
    tests: Tests,
    affiliates: Affiliates
}
export interface Tests {
        id : number,
        nombre : string,
        description : string
}
export interface Affiliates {
        id : number,
        nombre : string,
        age : number,
        mail : string
}

export interface AffiliatesOrganized {
        id : number,
        nombre : string,
        age : number,
        mail : string,
        showAppointments : boolean,
        appointments : Appointments[]
}
