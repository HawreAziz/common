import { Subjects } from './subjects';


export interface TicketUpdatedEvent {
    subject: Subjects.TicketUpdated;
    data: {
        title: string;
        id: string;
        userId: string;
        price: number;
    }
}