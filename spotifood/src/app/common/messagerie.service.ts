import { Injectable } from '@angular/core';
import message from './message';
import { Message } from '../models/messagerie';

@Injectable({
  providedIn: 'root'
})
export class MessagerieService {

  messages: Message[];

  constructor() {
    if (!localStorage.Messagerie) {
      // Initialisation du local storage et du tableau products avec tableau des produits
      this.messages = message.map((x) => {

        const send = new Message();

        send.name = x['name'];
        send.objet = x['objet'];
        send.email = x['email'];
        send.message = x['message'];

        return send;
      });
      this.saveToLocalStorage(this.messages);

    } else {
      // Si le tableau Products existe déjà dans le local storage, enregistrer les données correspondantes dans this.products
      const data = JSON.parse(localStorage.Messagerie);
      this.messages = data;
    }
   }


  saveToLocalStorage(messages) {
    const data = JSON.stringify(messages);
    localStorage.setItem('Messagerie', data);
  }

  get(): Message[] {
    return this.messages;
  }

  add(messagerie: Message) {
    this.messages.push(messagerie);
    this.saveToLocalStorage(this.messages);
  }

  delete(messagerie: Message) {
    const index = this.messages.findIndex(message => message.name === messagerie.name);
    this.messages.splice(index, 1);
    this.saveToLocalStorage(this.messages);
  }
}