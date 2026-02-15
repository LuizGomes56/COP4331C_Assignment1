## POOSD Assignment #1

| First Name | Last Name | Due date | Professor |
|----------|----------|----------|----------|
| Luiz Gustavo | Santana Dias Gomes | 2/15/2026 | Yadavally |

### Technologies used

**Editor**
- Visual Studio Code

**Backend**
- PHP, using only language builtin functions. No frameworks
- No usage of `composer`

**Frontend**
- HTML, CSS, Vanilla JS
- Downloaded `md5` library (although unused)

### Running the application

1. **Clone GitHub repository**
    - https://github.com/LuizGomes56/COP4331C_Assignment1.git

2. **Database setup**
    - Download `MySQL Workbench`
    
    - **From `.env.example` file**
        - Create a new user `TheBeast`
        - Setup the password as `WeLoveCOP4331`
        - Create a database called `COP4331`
        - Create table `Users`
            - Fields: `FirstName`, `Password`, `LastName`, `ID`, `Login`
        - Create table `Colors`
            - Fields: `ID`, `Name`, `UserID`
        - Fill the database with some data

3. **Move the database to a remote server**
    - In my example I'm using my personal AWS machine. I will call its IP address `00.000.000.000`
    > sudo apt install mysql-client
    
    > sudo mysql -h 00.000.000.000 -u TheBeast -p WeLoveCOP4331 < database.sql

    > cd /var/www/html

    > sudo git clone https://github.com/LuizGomes56/COP4331C_Assignment1.git

    > sudo mv COP4331C_Assignment1/public ../

4. **Run the application**
    - Open `http://00.000.000.000/COP4331C_Assignment1`

    - Use the login credentials `SamH` with password `Test`

### What the application does

- Login with any account, which you have to fill directly through the database because there's no such register page. 
- Then you can search colors by their name/prefix/postfix and the app will display colors that match your search parameter.
- You'll be able to see only colors that are already registered in the database
- You can create new colors, but never delete them
- Colors are specific to each user
