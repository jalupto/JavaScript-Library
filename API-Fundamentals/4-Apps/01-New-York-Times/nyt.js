const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = 'gp57DFzRQebGVj5p9lNJPVGpGZZ2csEl'; // please include your own key
let url; // declaring a url variable but not assigning value yet

const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');
const section = document.querySelector('section');

nav.style.display = 'none';
let pageNumber = 0; // counter

searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);

function fetchResults(e) {
    e.preventDefault();

    url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.nodeValue}`;

    if (startDate.value !== '') {
        console.log(startDate.value)
        url += '&begin_date=' + startDate.value;
    };

    if (endDate.value !== '') {
        url += '&end_date=' + endDate.value;
    };
    
    fetch(url)
        .then(function (result) {
        return result.json();
    })
    .then(function (json) {
        displayResults(json);
    });
}

function displayResults(json) {
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }
    let articles = json.response.docs;

    if (articles.length === 0) {
        console.log("No Results");
    } else {
        for (let i = 0; i < articles.length; i++) {
            let article = document.createElement('article');
            let heading = document.createElement('h2');
            let link = document.createElement('a');

            let current = articles[i];
            console.log("Current:", current);

            link.href = current.web_url;
            link.textContent = current.headline.main;

            article.appendChild(heading);
            heading.appendChild(link);
            section.appendChild(article);
        }
    }

    if (articles.length >= 10) {
        nav.style.display = 'block'; //shows the nav display if 10 items are in the array
    } else {
        for (let i = 0; i < articles.length; i++) {
            let article = document.createElement('article');
            let heading = document.createElement('h2');
            let link = document.createElement('a');
            let img = document.createElement('img');
            let para = document.createElement('p');
            let clearfix = document.createElement('div');

            let current = articles[i];
            console.log("Current:", current);

            link.href = current.web_url;
            link.textContent = current.headline.main;

            para.textContent = 'Keywords: ';

            for (let j = 0; j < current.keywords.length; j++) {
                let span = document.createElement('span');
                span.textContent += current.keywords[j].value + ' ';
                para.appendChild(span);
            }

            if (current.multimedia.length > 0) {
                img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
                img.alt = current.headline.main;
            }

            clearfix.setAttribute('class', 'clearfix');

            article.appendChild(heading);
            heading.appendChild(link);
            article.appendChild(para);
            article.appendChild(clearfix);
            section.appendChild(article);
            nav.style.display = 'none'; //hides the nav display if less than 10 items are in the array
        }
    };

    function nextPage(e) {
        pageNumber++;
        fetchResults(e);
        console.log("Page number:", pageNumber);
    };

    function previousPage(e) {
        if (pageNumber > 0) {
            pageNumber--;
        } else {
            return;
        }
        fetchResults(e);
        console.log("Page:", pageNumber);
    }
};