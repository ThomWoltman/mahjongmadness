import { User } from '../Models/user';
import { Template } from 'app/browse/Models/template';

export class Game {
    _id: string;
    id: string;

    createdBy: User;
    createdOn: string;
    gameTemplate: Template;
    templateName: string;
    __v: number;
    players: User[];
    maxPlayers: number;
    minPlayers: number;
    state: string;
}