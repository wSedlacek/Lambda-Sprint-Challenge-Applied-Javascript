// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const Tab = topic => {
  const tab = document.createElement('div');
  tab.className = 'tab';
  tab.textContent = topic;
  return tab;
};

const topics = document.querySelector('.topics');

axios
  .get('https://lambda-times-backend.herokuapp.com/topics')
  .then(response => response.data.topics.map(topic => Tab(topic)))
  .then(tabs => tabs.forEach(tab => topics.append(tab)));
