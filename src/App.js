import React from 'react'
import { FiYoutube, FiTwitter,FiInstagram, FiGithub,FiThumbsUp  } from 'react-icons/fi';
import './App.css';



function App() {


  const projectContent = {
    myProject: [
      {
        title: 'project a',
        image: 'https://i.pinimg.com/originals/91/bf/ca/91bfca89788e78e44743d84dbafa64bb.png',
        url: 'localhost:5000',
        likes: '5',
        repo: 'localhost:5000',
      },{
        title: 'project b',
        image:'https://cdn.dribbble.com/users/3133834/screenshots/16335823/media/ba21b6412392f1c90cac1582352fb447.jpg?compress=1&resize=1200x900',
        url: 'localhost:5000',
        likes: '5',
        repo: 'localhost:5000',
      },{
        title: 'project c',
        image: 'https://cdn.dribbble.com/users/2285351/screenshots/16330755/media/18c20b369d63fac6621f94647004c864.png?compress=1&resize=1200x900',
        url: 'localhost:5000',
        likes: '5',
        repo: 'localhost:5000',
      }
    ],
    myBlogs: [
      {
        name: 'blog 1',
        imgUrl: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
      },
      {
        name: 'blog 2',
        imgUrl: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
      },
      {
        name: 'blog 3',
        imgUrl: "https://preview.redd.it/uy2a2r0jqck71.png?width=1920&format=png&auto=webp&s=ffa623d9000ceeecc911ca4bf329b37e4d2d03ff" 
      }
    ],
    myContact : {
      name: 'Patrick Gotena',
      email: 'stacy@gmail.com',
      note: 'Youre cool',
    },
    name: 'crispysandwhich'
  }




  return (
    <div className="App">

      <header>
        <h1>lyub12</h1>
        <ul>
          <li><FiYoutube /></li>
          <li><FiTwitter /></li>
          <li><FiGithub /></li>
          <li><FiInstagram /></li>
        </ul>
      </header>


      <main>

        <header>
          <h2>Welcome to myBlock</h2>
          <p>Lets build our own block</p>
        </header>

        {/* my Projects */}
        <section className="myProjects">
          <h2>myProjects: {true ? '✔' : '❌'}</h2>
            <div className="projectsContainer">
              <div className="projectTitles">
                {
                  projectContent.myProject.map(item => {
                    return (
                      <div>
                        {item.title}
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div className="projectDetails">
              {
                projectContent.myProject.map(item => {
                  return(
                    <div>
                      <img src={item.image} style={{width: "400px", border: "5px solid black"}}/>
                      <ul>
                        <li><FiThumbsUp />{item.likes}</li>
                        <li>Repo: {item.repo}</li>
                      </ul>
                    </div>
                  )
                })
              }

            </div>
        </section>
        

        {/* myBlog */}
        <section className="myBlog">
          <h2>myBlog: {true ? '✔' : '❌'}</h2>
              <div className="myBlogsContainer">

              </div>
        </section>

      </main>
    </div>
  );
}

export default App;
