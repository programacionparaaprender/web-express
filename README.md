
### configuración bootstrap nueva
>- https://www.techiediaries.com/angular-bootstrap/
>- https://www.tutsmake.com/angular-17-install-add-bootstrap-5-example/#google_vignette

### texto
>- proyecto api express con cors y orm conectado a sql server usando typescript
>- comando sequelize para realizar migración sql server es2021 @types/express 4
>- proyecto api express con cors y orm conectado a sql server usando typescript es2021 y crear una migración
>- actualizar un registro con sequelize
>- eliminar un registro con sequelize

### compilar aplicación
>- npx tsc --init
>- npx tsc

### comandos

>- npm install --save-dev sequelize-cli
>- npx sequelize-cli init
>- npx sequelize-cli migration:generate --name migra-1
>- npx sequelize-cli db:migrate
>- npx sequelize-cli db:migrate:status
>- npx sequelize-cli db:migrate:undo
>- npx sequelize-cli db:migrate

# comandos instalar
>- npm install sequelize sequelize-cli tedious
>- npm install --save-dev typescript @types/node @types/express
>- npm install express sequelize tedious cors
>- npm install --save-dev typescript @types/node @types/express @types/cors sequelize-cli


# Crear una nueva migración
npx sequelize-cli migration:generate --name create-users-table

# Editar el archivo generado en `migrations/`

# Aplicar las migraciones a la base de datos SQL Server
npx sequelize-cli db:migrate

# Verificar el estado de las migraciones
npx sequelize-cli db:migrate:status

# Revertir la última migración
npx sequelize-cli db:migrate:undo


### configurar proyecto express
>- npm install body-parser core-js cors express
>- npm install --save-dev ts-node
>- npm i -D typescript @types/express @types/node

### depurar con la extensión
>- JavaScript Debugger (Nightly)


### error TypeScript compiler options "target" and "useDefineForClassFields" are set to "ES2022" and "false" respectively by the Angular CLI.
>- https://stackoverflow.com/questions/75047760/typescript-target-warnings-after-angular-15-update
