export interface GetByDateList{

        id: number,
        date: string,
        hour: string,
        tests: tests[];
        affiliates: affiliates[]
    }
    interface tests {
            id : number,
            nombre : string,
            description : string
    }
    
    interface affiliates {
            id : number,
            nombre : string,
            age : number,
            mail : string
    }