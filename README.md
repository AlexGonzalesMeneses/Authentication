# Ultimate Team (Security4you)
### Integrants:
- **Alex Gonzales**
- **Gustavo Omonte**
- **Paulo Choque**

The program is divided in two:
- *Backend* (server)
- *Frontend* (cliet)

### Frontend Requirements:
- `node v14.17` (onwards)
- Client folder
- Install dependencies
```sh
npm i
```
- Start the application
```sh
npm start
```

### Backend Requirements:
- Run the Script `\server\script.sql` in your SQL Server, for create the DataBase.
- Change the Conection String in the folder `\server\UltimateTeam.Api\appsettings.json`
Example:
```sh
"DefaultConnection": "DataSource=192.168.0.14,14044;Database=safeInformationDB;User Id=sa;Password=Passw0rd"
```
- Run the folder `\server\UltimateTeam.Api`
```sh
dotnet run
```

Coveage with Covert

Backend: Test
```sh
dotnet test /p:CollectCoverage=true
```


Security4you is a web application information manager, which is able to store:
- Contacts
- Credentials
- Credit cards
- Keys
- Notes

#### Features
- Friendly UI.
- Easy to understand.
- Sensitive data is saved and encrypt.
- Advanced data search.
