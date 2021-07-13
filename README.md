# news-api-website
The website is developed with Vue 3 and Bootstrap 5. The description here would illustrate the steps I did for creating the website. Note that newsapi only serves in developer mode, i.e., using localhost. The API won't work when into production. For deploying the website, I would recommend using GNews API.

## Usage:
1. git clone the repository.
2. apply for the API key and put it in your ```env.``` file.
3. use the command ``` npm run serve ```

## For API details:
1. https://newsapi.org/
2. https://gnews.io/

## Illustration
### Large screen
![Imgur](https://i.imgur.com/VB8LjrJl.png)
Figure 1 main page with masonry cards, search bar and filter options

![Imgur](https://i.imgur.com/2F0Xp2Sll.png)
Figure 2 footer

![Imgur](https://i.imgur.com/3ZgKAjll.png)
Figure 3 about

### Small screen
![Imgur](https://i.imgur.com/AxSStxrl.png)
Figure 4 small screen, toggleable nav-bar, responsive search bar, filters

![Imgur](https://i.imgur.com/NHAISiCl.png)
Figure 5 small screen footer

![Imgur](https://i.imgur.com/UZGrJQdl.png)
Figure 6 small screen about and description



## Steps
The steps here specify the order of the development.

### Step 1: App.vue
As a single-page application (SPA), here needs to specify the components. The website would have a header section, content, and a footer section. The ``` <router-view> ``` would achieve rendering different views. 

### Step 2: Home.vue view, NewsDetails.vue, router/index.js
The Home view would be the main page showing the news card. To change among different routes without refreshing the pages, I use the ```vue-router```.

### Step 3: TheNavigation.vue
The navigation bar aims to change views. Here I provide the ``` About.vue ``` for illustrating the changing view between Home and About.

### Step 4: Footer.vue, TheAccordion.vue
The footer would be the extra information that the users might want to know. Here you can also provide the contact information or service information regarding the social media link. The accordion provides the FAQs if users are interested.

### Step 5: About.vue
The section here is regarding the developer's information or description. I make it random-generated when routing to the view. 