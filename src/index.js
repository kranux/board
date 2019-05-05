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
    const heading = ce('h2');
    heading.textContent = board.title;
    const header = ce('header');
    header.appendChild(heading);
    container.querySelector('article').appendChild(header);

    for (let list of board.lists || []) {
      const listContainer = ce('article');
      const heading = ce('h3');
      heading.textContent = list.title;
      const header = ce('header');
      header.appendChild(heading);
      listContainer.appendChild(header);

      const cardsContainer = ce('ul');
      for (let card of list.cards || []) {
        const cardContainer = ce('li');
        const cardContent = ce('article');

        const heading = ce('h4');
        heading.textContent = card.title;
        const header = ce('header');
        header.appendChild(heading);
        cardContent.appendChild(header);

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
})();
