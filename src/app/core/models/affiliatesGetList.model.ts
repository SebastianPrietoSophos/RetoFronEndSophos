export interface AffiliatesList{

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
        mail : string,
        expanded : boolean,
        citas : any[] | null
}

