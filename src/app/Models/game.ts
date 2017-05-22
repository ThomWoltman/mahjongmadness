import { User } from '../Models/user';
import { Template } from '../Models/template';

export class Game {
    _id: string;
    createdBy: User;
    createdOn: string;
    gameTemplate: Template;
    templateName: string;
    __v: number;
    players: User[];
    maxPlayers: number;
    minPlayers: number;
    state: string;
    id: string;
}