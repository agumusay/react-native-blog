# Simple Blog App with React Native + Json Server + Ngrok

the app is made following [The Complete React Native + Hooks Course [2020 Edition]](https://www.udemy.com/course/the-complete-react-native-and-redux-course/) from [Udemy](https://www.udemy.com/)

## If you want to see how it works on your computer

- React Native Setup
  1. Clone The Project to your computer
  2. Go inside the project folder
  3. Open Terminal - `npm install`
  4. `npm run Start`

> We will come back to QR code

---

- Server Setup (a bit tricky)

  > You will Need 2 additional terminal windows 3 terminals in total

  1. Inside the project folder open second terminal
  2. Go to server folder / `cd server`
  3. run `npm run db` command
  4. open third terminal window
  5. run `npm run tunnel`
  6. copy the first Forwarding link from terminal Should look something like this `http://433c965589b2.ngrok.io`
  7. Go to project folder /src/api/jsonServer.js and change

  ```javascript
  baseURL: ' http://b82c96ac682a.ngrok.io';
  ```

  with the actual url you copied from terminal and save

Now you can go to localhost:3000 and you should see the success page from json-server

![alt text](https://github.com/agumusay/react-native-blog/blob/master/success.png 'Json-Server Success Page')

- Test On your mobile device

  > You will Need to install Expo app from Google Play Store or Apple App Store to be able to test the app

  1. Open Expo app on your mobile device
  2. Scan the QR code showed up on the browser earlier
  3. if you get en error change Lan To Tunnel
  4. if everything went well you should be able to use the app now
