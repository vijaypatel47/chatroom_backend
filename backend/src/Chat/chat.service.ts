import { WebSocketGateway, SubscribeMessage, MessageBody, OnGatewayConnection, OnGatewayDisconnect, WebSocketServer, ConnectedSocket } from '@nestjs/websockets';
import { Socket,Server } from 'socket.io';
import { Client } from 'socket.io/dist/client';

@WebSocketGateway({
    cors: {
      origin: ['https://chat-room-demo-three.vercel.app', 'http://localhost:3000'],
      method:['GET','POST'],
      credentials:true
      
    },
  })

export class ChatService implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  handleConnection(client: any) {
    console.log('Client connected  ' + client.id);
  }

  handleDisconnect(client: any) {
    console.log('Client disconnected  '+ client.id);
  }
  
  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: string, @ConnectedSocket() client:any): void {
    // console.log(socket.id)
    // console.log(message)
    // console.log(client.id)
    this.server.emit('message',{"msg":message, "sender":client.id});
    // this.server.except(client.id).emit('message', message); // these is used to hide response from the server or cureent client which send msg
  }
}
