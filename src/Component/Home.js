import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  // let name = 'mario';
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);
  // const [age,setAge] = useState(2523);
  // const handleClick =() =>{
  //     console.log(name);s
  //     setName('luigi');

  // }

  // const handleClickAgian = (name,e ) => {
  //     console.log('hello' + name,e.target);
  // }

  const handleDelete = (id ) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    // filter blog
    setBlogs(newBlogs);
    // render new blogs
}

  useEffect(() =>{
    console.log("useEffect trigged");
    console.log(blogs);
  });

  return (
    <div className="home">
      {/* <h2>Homepage</h2>
        <p>{name} is {age} years old </p>
        <button onClick ={handleClick}>Click Me</button>
        <button onClick ={(e) => 
            handleClickAgian("mario",e)
            }>Click Me Agian</button> */}
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="Mario Blogs!"
      /> */}
    </div>
  );
};

export default Home;
