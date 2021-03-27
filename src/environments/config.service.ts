import * as dotenv from 'dotenv';
import { readFileSync } from 'fs';
import { join } from 'path';

export class ConfigService {
    private readonly env: {[key: string]: string};

    constructor(environment: string){
        this.env = dotenv.parse(readFileSync(join(__dirname,'\\..\\..\\',environment+".env" ), 'utf8'));
    }
    get(key: string){
        return this.env[key]
    }
}
export const configService = new ConfigService(process.env.env);