(function() {
  const container = document.getElementById('container');
  const board = {
    title: 'My board',
    lists: [
      {
        title: 'My list 1',
        cards: [
          { title: '#1 card in list1', description: 'cards #1 description' },
          { title: '#2 card in list1' },
        ],
      },
      {
        title: 'My list 2',
      },
    ],
  };
  loadBoard(container, board);
  function loadBoard(container, board) {
    for (let i = 0; i < container.children.length; i++) {
      container.children[i].remove();
    }

    container.appendChild(ce('article'));
    container.querySelector('article').appendChild(buildHeader(board.title));

    for (let list of board.lists || []) {
      const listContainer = ce('article');
      listContainer.appendChild(buildHeader(list.title, 2));

      const cardsContainer = ce('ul');
      for (let card of list.cards || []) {
        const cardContainer = ce('li');
        const cardContent = ce('article');

        cardContent.appendChild(buildHeader(card.title, 3));

        const description = ce('p');
        description.textContent = card.description;
        const section = ce('section');
        section.appendChild(description);
        cardContent.appendChild(description);

        cardContainer.appendChild(cardContent);
        cardsContainer.appendChild(cardContainer);
      }
      listContainer.appendChild(cardsContainer);
      container.querySelector('article').appendChild(listContainer);
    }
  }

  function ce(tagName) {
    return document.createElement(tagName);
  }

  function buildHeader(title, level = 1) {
    const heading = ce(`h${level}`);
    heading.textContent = title;
    const header = ce('header');
    header.appendChild(heading);
    return header;
  }
})();
