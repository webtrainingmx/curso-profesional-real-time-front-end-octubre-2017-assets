import { Question } from './question.model';
import { Answer } from './answer.model';
import { Vote } from './vote.model';

export class Poll {
  id?: number;
  question: Question;
  answers: Array<Answer>;
  votes: Array<Vote>;
}
