# Event Stream demo

Event Stream is a unidirectional protocol, meaning:

- data is sent from the server to the client only
- client cannot send data back to the server using Event Stream

This makes it suitable for scenarios where the server needs to send updates or push notifications to the client, but
does not require bidirectional communication.

## Instructions

### Install dependencies and start the server

```shell
# (or yarn, or whatever)
npm install
npm start
```

### Open the demo page

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Resources

- [MDN: Using server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events)
