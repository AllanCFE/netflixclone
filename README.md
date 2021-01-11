# Netflix Clone

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It is a copy of the main page of Netflix, make with the purpose of study and get a better understading of React JS and responsivity.

You can view the live version at [Vercel](https://netflixclone.allancfe.vercel.app).

## Sections
The development of this website can be divided in three main parts: The header, the spotlight and the lists.

### Header
In the header I am using a replacement logo so Vercel does not get in any trouble by hosting my page. The main feature of this part of the page is that when the user gets down on the page, the background goes from transparent to gray.

![Transparent background](https://i.imgur.com/9xtfQKW.png)

![Solid background](https://i.imgur.com/0TlHhnG.png)

### Spotlight
The spotlight select, in a random way, one of the Netflix shows and displays it in the very beginning of the page, along with its average critics rate, year of the launch, number of seasons, a brief description and the genres of the show.

For stylish purposes, buttons of "Watch" and "+My List" are disposed, but have no function.

![Spotlight](https://i.imgur.com/ptdDNHf.png)

### Lists
In the main part of the page it is showed some lists, all of those got on [The Movie DataBase's API](https://developers.themoviedb.org/3). The lists selected to be on the page are: Netflix Originals (not getting the proper content at the moment), For you (based on the most viewed at the current week), top rated and the genres of Action, Horror, Documentary and Drama.

Each of the lists have a carousel setted, and, when the mouse get on the list, the navigations arrows appears. In the mobile version, the navigation arrows are always on to facilitate the browsing.

![Lists](https://i.imgur.com/j5YwthL.png)

## Other Features
One of the other features that are worth to mention is the loading screen. While the user are waiting for the response of the data, a loading page is showned, to guarantee to the user that the data is being retrieved.

![Load Screen](https://i.imgur.com/dsFdss3.png)