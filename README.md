# news-api-practice

The website is developed with Vue 3 and Bootstrap 5. The description here would illustrate the steps I did for creating the website. Note that newsapi only serves in developer mode, i.e., using localhost. The api won't work when into production. For deploying the website, I would recommend using GNews.

### Step 1: App.vue
As a single-page application (SPA), here needs to specify the components. Basically, the website would have header section, content, and footer section. 

### Step 2: Home.vue view, NewsDetails.vue, router/index.js
The Home view would be the main page showing the news card. To change among different routes without refreshing the pages, the ```vue-router``` applies.

### Step 3: TheNavigation.vue
The navigation bar aims to change views. Here I provide the ``` About.vue ``` for illustrating the changing view between Home and About.

### Step 4: Footer.vue, TheAccordion.vue
The footer would be the extra information that would let the users might want to know. Here you can also probide the contact information or service information regarding the social media link. The accordion provides the FAQs if users are interested.

### Step 5: About.vue
The section here is regarding the developer's information or description. I make it random-generated when routing to the view. 