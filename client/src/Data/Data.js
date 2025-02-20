const Answer = {
  level1: [
    { name: 'move', value: 'move' },
    { name: 'move', value: 'move' },
    { name: 'move', value: 'move' },
    { name: 'move', value: 'move' },
    { name: 'color', value: 'red' },
  ],

  level2: [
    { name: 'dropBox', value: 'dropbox' },
    { name: 'move', value: 'move' },
    { name: 'move', value: 'move' },
    { name: 'move', value: 'move' },
    { name: 'dropBox', value: 'dropbox' },
    { name: 'move', value: 'move' },
    { name: 'move', value: 'move' },
    { name: 'move', value: 'move' },
    { name: 'color', value: 'yellow' },
  ],
  level3: [
    { name: 'move', value: 'move' },
    { name: 'move', value: 'move' },
    { name: 'dropBox', value: 'dropbox' },
    { name: 'move', value: 'move' },
    { name: 'move', value: 'move' },
    { name: 'turn', value: 'turn' },
    { name: 'turn', value: 'turn' },
    { name: 'turn', value: 'turn' },
    { name: 'move', value: 'move' },
    { name: 'dropBox', value: 'dropbox' },
    { name: 'move', value: 'move' },
    { name: 'turn', value: 'turn' },
    { name: 'turn', value: 'turn' },
    { name: 'turn', value: 'turn' },
    { name: 'move', value: 'move' },
    { name: 'move', value: 'move' },
    { name: 'dropBox', value: 'dropbox' },
    { name: 'move', value: 'move' },
    { name: 'move', value: 'move' },
    { name: 'turn', value: 'turn' },
    { name: 'turn', value: 'turn' },
    { name: 'turn', value: 'turn' },
    { name: 'move', value: 'move' },
    { name: 'dropBox', value: 'dropbox' },
    { name: 'move', value: 'move' },
    { name: 'turn', value: 'turn' },
    { name: 'turn', value: 'turn' },
    { name: 'turn', value: 'turn' },
  ],
  level4: [
    { name: 'move', value: 'move' },
    { name: 'move', value: 'move' },
    { name: 'move', value: 'move' },
    { name: 'turn', value: 'turn' },
    { name: 'turn', value: 'turn' },
    { name: 'turn', value: 'turn' },
    { name: 'move', value: 'move' },
    { name: 'move', value: 'move' },
    { name: 'turn', value: 'turn' },
    { name: 'move', value: 'move' },
    { name: 'move', value: 'move' },
    { name: 'move', value: 'move' },
    { name: 'color', value: 'red' },
  ],
  level5: [
    { name: 'move', value: 'move' },
    { name: 'turn', value: 'turn' },
    { name: 'turn', value: 'turn' },
    { name: 'turn', value: 'turn' },
    { name: 'move', value: 'move' },
    { name: 'turn', value: 'turn' },
    { name: 'move', value: 'move' },
    { name: 'turn', value: 'turn' },
    { name: 'turn', value: 'turn' },
    { name: 'turn', value: 'turn' },
    { name: 'move', value: 'move' },
    { name: 'turn', value: 'turn' },
    { name: 'move', value: 'move' },
  ],
  level6: [
    { name: 'move', value: 'move' },
    { name: 'move', value: 'move' },
    { name: 'move', value: 'move' },
    { name: 'move', value: 'move' },
    { name: 'move', value: 'move' },
    { name: 'move', value: 'move' },
    { name: 'turn', value: 'turn' },
    { name: 'turn', value: 'turn' },
    { name: 'turn', value: 'turn' },
    { name: 'move', value: 'move' },
    { name: 'dropBox', value: 'dropbox' },
    { name: 'move', value: 'move' },
    { name: 'turn', value: 'turn' },
    { name: 'turn', value: 'turn' },
    { name: 'turn', value: 'turn' },
    { name: 'move', value: 'move' },
    { name: 'move', value: 'move' },
    { name: 'move', value: 'move' },
    { name: 'move', value: 'move' },
    { name: 'move', value: 'move' },
    { name: 'move', value: 'move' },
  ],
  level7: [
    { name: 'move', value: 'move' },
    { name: 'move', value: 'move' },
    { name: 'turn', value: 'turn' },
    { name: 'move', value: 'move' },
    { name: 'move', value: 'move' },
    { name: 'turn', value: 'turn' },
    { name: 'move', value: 'move' },
    { name: 'move', value: 'move' },
    { name: 'turn', value: 'turn' },
    { name: 'move', value: 'move' },
    { name: 'move', value: 'move' },
    { name: 'turn', value: 'turn' },
    { name: 'move', value: 'move' },
    { name: 'move', value: 'move' },
    { name: 'turn', value: 'turn' },
    { name: 'move', value: 'move' },
    { name: 'move', value: 'move' },
    { name: 'turn', value: 'turn' },
    { name: 'move', value: 'move' },
    { name: 'move', value: 'move' },
    { name: 'turn', value: 'turn' },
  ],
};

export const QuestionsList = {
  quiz1: [
    {
      prompt: 'Vad står HTML för?',
      optionA: 'Home Tool Markup Language',
      optionB: 'Hyperlinks and Text Markup Language',
      optionC: 'Hyper Text Markup Language',
      optionD: 'High-Tech Machine Language',
      answer: 'C',
    },
    {
      prompt: 'Vilken symbol används för kommentarer i JavaScript?',
      optionA: '//',
      optionB: '#',
      optionC: '/* */',
      optionD: '<>',
      answer: 'A',
    },
    {
      prompt: 'Vilket av följande är ett giltigt Python-variabelnamn?',
      optionA: '2variable',
      optionB: 'my_variable',
      optionC: 'my-variable',
      optionD: 'my variable',
      answer: 'B',
    },
  ],
  quiz2: [
    {
      prompt: 'Vad står HTML för?',
      optionA: 'Home Tool Markup Language',
      optionB: 'Hyperlinks and Text Markup Language',
      optionC: 'Hyper Text Markup Language',
      optionD: 'High-Tech Machine Language',
      answer: 'C',
    },
    {
      prompt: 'Vilken symbol används för kommentarer i JavaScript?',
      optionA: '//',
      optionB: '#',
      optionC: '/* */',
      optionD: '<>',
      answer: 'A',
    },
    {
      prompt: 'Vilket av följande är ett giltigt Python-variabelnamn?',
      optionA: '2variable',
      optionB: 'my_variable',
      optionC: 'my-variable',
      optionD: 'my variable',
      answer: 'B',
    },
  ],
  quiz3: [
    {
      prompt: 'Vad står HTML för?',
      optionA: 'Home Tool Markup Language',
      optionB: 'Hyperlinks and Text Markup Language',
      optionC: 'Hyper Text Markup Language',
      optionD: 'High-Tech Machine Language',
      answer: 'C',
    },
    {
      prompt: 'Vilken symbol används för kommentarer i JavaScript?',
      optionA: '//',
      optionB: '#',
      optionC: '/* */',
      optionD: '<>',
      answer: 'A',
    },
    {
      prompt: 'Vilket av följande är ett giltigt Python-variabelnamn?',
      optionA: '2variable',
      optionB: 'my_variable',
      optionC: 'my-variable',
      optionD: 'my variable',
      answer: 'B',
    },
  ],
  quiz4: [
    {
      prompt: 'Vad står HTML för?',
      optionA: 'Home Tool Markup Language',
      optionB: 'Hyperlinks and Text Markup Language',
      optionC: 'Hyper Text Markup Language',
      optionD: 'High-Tech Machine Language',
      answer: 'C',
    },
    {
      prompt: 'Vilken symbol används för kommentarer i JavaScript?',
      optionA: '//',
      optionB: '#',
      optionC: '/* */',
      optionD: '<>',
      answer: 'A',
    },
    {
      prompt: 'Vilket av följande är ett giltigt Python-variabelnamn?',
      optionA: '2variable',
      optionB: 'my_variable',
      optionC: 'my-variable',
      optionD: 'my variable',
      answer: 'B',
    },
  ],
  quiz5: [
    {
      prompt: 'Vad står HTML för?',
      optionA: 'Home Tool Markup Language',
      optionB: 'Hyperlinks and Text Markup Language',
      optionC: 'Hyper Text Markup Language',
      optionD: 'High-Tech Machine Language',
      answer: 'C',
    },
    {
      prompt: 'Vilken symbol används för kommentarer i JavaScript?',
      optionA: '//',
      optionB: '#',
      optionC: '/* */',
      optionD: '<>',
      answer: 'A',
    },
    {
      prompt: 'Vilket av följande är ett giltigt Python-variabelnamn?',
      optionA: '2variable',
      optionB: 'my_variable',
      optionC: 'my-variable',
      optionD: 'my variable',
      answer: 'B',
    },
  ],
  quiz6: [
    {
      prompt: 'Vad står HTML för?',
      optionA: 'Home Tool Markup Language',
      optionB: 'Hyperlinks and Text Markup Language',
      optionC: 'Hyper Text Markup Language',
      optionD: 'High-Tech Machine Language',
      answer: 'C',
    },
    {
      prompt: 'Vilken symbol används för kommentarer i JavaScript?',
      optionA: '//',
      optionB: '#',
      optionC: '/* */',
      optionD: '<>',
      answer: 'A',
    },
    {
      prompt: 'Vilket av följande är ett giltigt Python-variabelnamn?',
      optionA: '2variable',
      optionB: 'my_variable',
      optionC: 'my-variable',
      optionD: 'my variable',
      answer: 'B',
    },
  ],
  quiz7: [
    {
      prompt: 'Vad står HTML för?',
      optionA: 'Home Tool Markup Language',
      optionB: 'Hyperlinks and Text Markup Language',
      optionC: 'Hyper Text Markup Language',
      optionD: 'High-Tech Machine Language',
      answer: 'C',
    },
    {
      prompt: 'Vilken symbol används för kommentarer i JavaScript?',
      optionA: '//',
      optionB: '#',
      optionC: '/* */',
      optionD: '<>',
      answer: 'A',
    },
    {
      prompt: 'Vilket av följande är ett giltigt Python-variabelnamn?',
      optionA: '2variable',
      optionB: 'my_variable',
      optionC: 'my-variable',
      optionD: 'my variable',
      answer: 'B',
    },
  ],
};

export default Answer;
