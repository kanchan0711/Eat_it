
import { IEnv } from "../types"

const development_environment_variables: IEnv =  {
    stage: process.env.ENVIRONMENT || 'development',
    port: 7000,
    domain:'',
    apiPath: '/api',
    staticPath: '/public',
    db:"mongodb://0.0.0.0:27017"
    // db: {
    //     // add localhost mongodb details //
    //     name: '',
    //     user:'',
    //     pw: '',
    //     account: '',
    //     uri: (user: string, pw :string, name :string, account: string): string => {
    //         return 'mongodb://localhost:27017'
    //     }
    // }
    
}

export default { ...development_environment_variables }