import * as dotenv from 'dotenv';
dotenv.config();

export const TypeOrmConfig = {
    type: 'postgres',
    host: process.env.PG_DB_HOST,
    port: parseInt(process.env.PG_DB_PORT),
    username: process.env.PG_DB_USERNAME,
    password: process.env.PG_DB_PASSWORD,
    database: process.env.PG_DB_NAME,
    entities: ["dist/**/*.model{.ts,.js}"],
    migrations: ["dist/infrastructure/database/migrations/*{.ts,.js}"],
    autoLoadEntities: true,
    synchronize: false,
    logging: false,
}

export const APP_PORT = process.env.PORT || 3000;