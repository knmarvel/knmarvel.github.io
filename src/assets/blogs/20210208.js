export const blog20210208 = `The 2 main rules for the 100daysofcode.com challenge are 1. Code minimum an hour every day for the next 100 days.; and 2. Tweet your progress every day with the #100DaysOfCode hashtag. One out of two ain't bad.

My goal for today is to edit my portfolio to include a very simple blog section to put these write ups on, deploying with React and Github pages. 

TASKS FOR TODAY:
- Reluctantly decide I'm going to take employed-as-a-dev friend's advice and do 100 days of code.
- Research 100 Days of Code to find out if the rules are doable.
- OK, sure, there are 2, I can do them and skip Saturdays if I want. 
- I'm not really a joiner, and I don't want to tweet, 'I'm publicly committing to the 100DaysOfCode Challenge starting today! Learn More and Join me! hey @ka11away https://100DaysOfCode.com #100DaysOfCode', so I leave crafting my FYI I'm Doing This Thing tweet for after I've done the hour of coding today. 
- Decide I'll also blog about it and start this Google doc. 
- I'm not going to write more about writing, because, boring. And I won't let Google autocorrect change my bad syntax right there, because, conversational tone, Google autocorrect, get with it.
- Install Wakatime extension in VS Code to prove I'm spending the time coding
- Sign into Wakatime with Github 
- Get logged into Github on my new phone 
- Set up Authenticator app on my new phone
- Realize I've been preparing to write code for an hour now and doing a lot of futzing around. Now...here we go.  

When I begin, my portfolio is just a create-react-app with my unspinny face instead of a spinny React icon. The highlight text is bright blue instead of teal. I have already made some Choices, you see.

Those three buttons open models. The projects modal looks fine, but the tech stack and resume are horrifyingly not implemented. 

I  don't want the blog to be a modal, I want it on its own page. So I'll add an ugly link on the main page and some routing. 

Quick look at the React Router docs to refresh my knowledge. 

That also means I get to clean up my App component by throwing those three buttons into their own component, named ModalManager. 

Let me write a stand in component for the blog landing. 

Next, a blogpost component that opens to a blog detail page

The data for a blogpost, for now, will be a JSON object:
- Title
- Date
- Listening to
- Post content (written in markdown?) For now I'm trying the React Markdown
- Tags

Map through the json and put them all into a blog short post

Link to the full blog post using https://dev.to/dsckiitdev/dynamic-pages-using-react-router-2pm for refresher on react dynamic routing

# TECH DEBT:
- Style Nav
- Make the blog markdown work right and not look horrible
- Style Blog components
- Backend with form that supports adding these blog posts from the web <-lol



This playlist has way more disco than I expected.`