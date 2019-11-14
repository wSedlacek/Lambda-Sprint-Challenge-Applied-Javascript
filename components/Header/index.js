// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const Header = data => {
  const header = document.createElement('div');
  const headerDate = document.createElement('span');
  const headerTitle = document.createElement('h1');
  const headerTemp = document.createElement('span');

  header.className = 'header';
  headerDate.className = 'date';
  headerTemp.className = 'temp';

  headerDate.textContent = data.date;
  headerTitle.textContent = data.title;
  headerTemp.textContent = data.temp;

  header.append(headerDate);
  header.append(headerTitle);
  header.append(headerTemp);

  return header;
};

const headerContainer = document.querySelector('.header-container');
headerContainer.append(
  Header({
    date: 'SMARCH 28, 2019',
    title: 'Lambda Times',
    temp: '98°',
  })
);
