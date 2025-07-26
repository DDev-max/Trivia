import { Questions } from './quizJson';

function shuffleArray<T>(inputArray: T[]): T[] {
  const arrayCopy = [...inputArray];
  const lastIndex = arrayCopy.length - 1;

  for (let currentIndex = lastIndex; currentIndex > 0; currentIndex--) {
    const randomIndex = Math.floor(Math.random() * (currentIndex + 1));
    [arrayCopy[currentIndex], arrayCopy[randomIndex]] = [
      arrayCopy[randomIndex],
      arrayCopy[currentIndex],
    ];
  }

  return arrayCopy;
}

export function randomizeQuiz(questions: Questions[]): Questions[] {
  const shuffledQuestions = shuffleArray(questions);

  const randomizedQuiz = shuffledQuestions.map((q) => ({
    ...q,
    options: shuffleArray(q.options),
  }));

  return randomizedQuiz;
}
