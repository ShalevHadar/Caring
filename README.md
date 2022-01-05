# Hi there, I'm Shalev Hadar - [Linkedin Profile](https://www.linkedin.com/in/shalev-hadar-30703b144/)
### I'm a fullstack developer, passionate about creating solutions with value - just like this project.
---

While studying into one late night, I've encountered an article about school violence. 
Suddenly, a young girl said 'I feel like I can't tell anyone about it and that's when it hit me:
- Why there isn't an app that allows the student to report incidents anonymously?

That's what is 'Caring' for, giving students a platform to feel safe and share their incidents.

---

### Home screen, Trust us screen, Verification screen

<p float="left">
  <img src="https://user-images.githubusercontent.com/76647060/148210836-29983288-e5e7-4754-8fd5-f6191fef29fb.PNG" width="250" height="550">
  <img src="https://user-images.githubusercontent.com/76647060/148212424-f41b0f12-3d9f-4cf0-89d1-3cf9d055f859.PNG" width="250" height="550">
  <img src="https://user-images.githubusercontent.com/76647060/148212039-9cac9ae4-eb3a-4fe2-addf-abe40c928859.PNG" width="250" height="550">
</p>

### Incident report screen, Incidents dashboard screen, Specific incident screen

<p float="left">
  <img src="https://user-images.githubusercontent.com/76647060/148212501-d6f7c218-f5da-486e-a4a8-0a333c89729f.PNG" width="250" height="550">
  <img src="https://user-images.githubusercontent.com/76647060/148212505-63fadf08-e24e-4bc5-b21f-46b93a821584.PNG" width="250" height="550">
  <img src="https://user-images.githubusercontent.com/76647060/148212509-9ad75844-954d-40bd-9dd5-5533e89aabbd.PNG" width="250" height="550">
</p>

---

### ERD Model - Sql based

<img src="https://user-images.githubusercontent.com/76647060/148213820-c634a03c-2374-4549-8fb0-d3c36268ee33.png">

## Flow & Design:

#### Home Screen:
- The student insert his email, the email is verified in the database
- Email regex for the client -> verify email in database
- After the email is verified, the server generates a new 4-digits pin and set it to the student 'Pincode' field in the DB
- then the Pincode is sent to the student email using nodemailer

--

#### Verification Screen:
- The student enters the 4 code he got from the last page email -> if successful, the user can go to the next screen (Incident report screen) & the server creates a JWT token for him.
- If the student enters less than 4 digits, the client will notify.
- The server checks if the Pincode the student placed was matched with the one in the DB.

--

#### Incident report screen:
- The user can choose if to identify himself or not
- Then he can describe the incident
- After clicking the 'Send' button, the server will verify if the token exists
  - if the token does exist, allow the user to send the incident report
  - if not, the user cannot report incidents (blocks from harmful requests)
- When the report was made, send the user to the next screen - the Dashboard

--

#### Incidents dashboard screen:
- System will make a GET request to the server with all the student incidents
- along with the student id the token from the last screen will be sent as well
- the server will respond with the incidents only if the token exists.

---
#### Student UI: Expo CLI, React native
- dependencies: lottie, react-native-paper, gesture-handler, scroll-view and more.

#### Teacher UI: React web app
- dependencies: *in the future*

#### Server & API: NodeJS, Express, MySQL
- dependencies: cors, dotenv, express, jwt, mysql2, nodemailer, nodemon

---



Color plate: "ffffff","dbbea1","7a6c5d","3f292b","48acdf"
