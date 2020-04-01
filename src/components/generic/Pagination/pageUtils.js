
const createPages = (...args) => {
  const [handlePageNav, pagesPerList, pageList, currentPage, pages] = args;
  const items = [];
  const children = '...';
  [1, 2, 3].forEach((number) => {
    const thisPage = pagesPerList * pageList + number;
    if (thisPage !== 1 && (thisPage - 1) % 3 === 0) {
      items.push({
        onClick: (event) => handlePageNav(event, pagesPerList * pageList, pageList - 1),
        href: '#',
        children,
      });
    }
    if (thisPage <= pages) {
      items.push({
        active: currentPage === thisPage,
        onClick: (event) => handlePageNav(event, thisPage),
        href: '#',
        children: thisPage,
      });
    }
    if (thisPage < pages && thisPage % 3 === 0) {
      items.push({
        onClick: (event) => handlePageNav(event, pagesPerList * (pageList + 1) + 1, pageList + 1),
        href: '#',
        children,
      });
    }
  });
  return items;
};

const createFirstHandles = (...args) => {
  const [handlePageNav, pageList, currentPage] = args;
  return [
    {
      disabled: currentPage <= 1,
      onClick: (event) => handlePageNav(event, 1, 0),
      href: '#',
      first: 'first',
    },
    {
      disabled: currentPage <= 1,
      onClick: (event) => {
        if ((currentPage - 1) % 3 === 0) {
          return handlePageNav(event, currentPage - 1, pageList - 1);
        }
        return handlePageNav(event, currentPage - 1);
      },
      previous: 'previous',
      href: '#',
    },
  ];
};

const createLastHandles = (...args) => {
  const [handlePageNav, pageList, currentPage, pages, totalLists] = args;
  return [
    {
      disabled: currentPage >= pages,
      onClick: (event) => {
        if (currentPage % 3 === 0) {
          return handlePageNav(event, currentPage + 1, pageList + 1);
        }
        return handlePageNav(event, currentPage + 1);
      },
      next: 'next',
      href: '#',
    },
    {
      disabled: currentPage >= pages,
      onClick: (event) => handlePageNav(event, pages, totalLists - 1),
      last: 'last',
      href: '#',
    },
  ];
};

const handlePages = (...args) => {
  const [handlePageNav, pagesPerList, pageList, currentPage, pages, totalLists] = args;
  return [
    ...createFirstHandles(handlePageNav, pageList, currentPage),
    ...createPages(handlePageNav, pagesPerList, pageList, currentPage, pages),
    ...createLastHandles(handlePageNav, pageList, currentPage, pages, totalLists),
  ];
};

export {
  createPages,
  createFirstHandles,
  createLastHandles,
  handlePages,
};
