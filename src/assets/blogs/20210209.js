export const blog20210209 = `\n\n\n\n\n\n'I like to futureproof things', I said to myself over and over again last night, making components stupidly complicated when my end goal was to put one blog post on my website. I've realized a few things: \n\n\n\n\n\n\n\n YAGNI -- as my [Kenzie](https://kenzie.academy) would say about future proofing, 'YA AIN'T GONNA NEED IT'. Likely, I won't use this site for more than practice. And if I do, I can change things up later.\n\n\n\n\n\n THANKS CRIPPLING PERFECTIONISM FOR WASTING MY TIME. I often make goals so lofty that I fail before I start.\n\n\n\n\n\n EDITING IS GOOD, but it needs to come after writing--the creative part of the brain is stifled by nitpicking. As Ernest Hemingway didn't say but everyone likes to say he said, 'Write drunk, edit sober.' I need to let the code flow. \n\n\nTODAY'S GOALS\n\n\n Style the blog landing and blog short post\n\n\n Stretch goal: style the blog detail page\n\n\n Stretch Armstrong goal: fix my projects, tech stack, and resume pages because they got borked hard in the last few commits.\n\n\nTODAY'S CHANGELOG\n\n\n BlogLanding component:\n\n\n\n\n\n Removed blog placeholder text.\n\n\n\n\n\n Added blog landing/blog post short CSS files and imported them.\n\n\n\n\n\n Imported [react-spinners](https://www.npmjs.com/package/react-spinners) library so if my blog doesn't immediately load, we've still got something visually interesting on the page.\n\n\n [UUID for the keys](https://www.npmjs.com/package/uuid)\n\n\n Make the BlogPostShort look like a card. Per my own tradition, start by making a border in the color whitesmoke. Of course, consult [css-tricks](https://css-tricks.com)\n\n\n OK, the blog post short doesn't look as awful. My main issue is that I have to make design decisions, and all I want out of the design is, 'looks OK', which really doesn't help me narrow anything down. Tomorrow, I'm taking some coding time as decision making time.\n\n\nRANDOM THINGS I LEARNED!\n\n\n GitHub Pages is persnickety. My previous set up followed the [react-gh-pages tutorial](https://github.com/gitname/react-gh-pages) and worked great. Last night, it did not work at all. Switched to [Vercel](https://www.vercel.com) for deployment until I'm less angry at Github pages and willing to troubleshoot.\n\n\n Gotta make my choices about my personal settings first thing -- music, text editor, whether or not the dog is allowed to sit next to me :D -- or I'll waste a lot of time.\n\n\n\n\n\n Tech debt\n\n\n Importing a txt file or md file is eluding me right now but I'll get to it so we can make react-markdown working.`