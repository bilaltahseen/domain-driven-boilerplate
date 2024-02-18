import { registerAs } from "@nestjs/config";
import { TypeOrmConfig } from "../../constants";
import { DataSource, DataSourceOptions } from "typeorm";


const config = TypeOrmConfig;

export default registerAs('typeorm', () => config)
export const connectionSource = new DataSource(config as DataSourceOptions);