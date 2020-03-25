# irl.iyte.edu.tr
The source code of IZTECH RoboLeague website made with React JS and React Bootstrap.

> Live in [irl.gokberkakdeniz.com](http://irl.gokberkakdeniz.com) during development.

## Development
### Readme: Create React App 
If you do not know React JS, you may start by reading [this](README.create-react-app.md).

### Project Hierarchy
    .
    ├── public
    │   └── images
    │       ├── about
    │       ├── archive
    │       │   ├── 2013
    │       │   ├── 2014
    │       │   ├── 2015
    │       │   ├── 2016
    │       │   └── 2017
    │       ├── home
    │       └── team
    └── src
        ├── Components
        │   ├── Category
        │   ├── Footer
        │   ├── Header
        │   └── Section
        ├── Pages
        │   ├── About
        │   ├── Archive
        │   │   └── Contests
        │   ├── Categories
        │   ├── Contact
        │   ├── Home
        │   │   ├── Announcements
        │   │   ├── Masthead
        │   │   └── PreviouslyIRL
        │   ├── Invitation
        │   ├── NotFound
        │   ├── Registration
        │   ├── Sponsors
        │   ├── Surviving
        │   └── Team
        └── Themes

### Theming
- Copy `src/Themes/Carbon.css` for base theme.
- Edit new file as you want.
- Edit `@import './Themes/Carbon.css';` for new theme name.

## Production
### Configuring Web Server
You may encounter when you enter enter url by hand in production. 
To resolve this problem, you may want to read [this documentation](https://gkedge.gitbooks.io/react-router-in-the-real/content/nginx.html).

# License
    MIT License

    Copyright (c) 2020 Gökberk AKDENİZ

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
