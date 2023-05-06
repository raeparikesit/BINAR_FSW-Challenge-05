# Car Management API

## Getting Started

Hal yang harus disiapkan ketika memulai projek
Pertama, buka file `/config/config.json` kemudian sesuaikan isi filenya dengan konfigurasi yang kalian miliki.
```
"development": {
      "username": "postgres", 
      "password": "admin123", 
      "database": "db_challenge5",//nama database yang ingin dibuat
      "host": "127.0.0.1",
      "dialect": "postgres"
    },
```

Kedua, install semua dependencies dengan menjalankan
```
npm i
```

Ketiga, buat database yang sesuai dengan apa yang ada dalam file `/config/config.json`, dilanjutkan dengan migrate dan seed data superadmin. 
```
sequelize db:create
```
```
sequelize db:migrate
```
```
sequelize db:seed:all
```


Data superadmin yang digunakan untuk login dan mengakses seluruh endpoint.
```
email: raeparikesit@gmail.com
password: admin123
```
```
npm run start
```

## Open API documentation dengan Postman
Untuk melihat seluruh endpoint yang tersedia dapat mengunjungi API Documentation di alamat berikut
```
https://documenter.getpostman.com/view/26448154/2s93eX1tRN

```
