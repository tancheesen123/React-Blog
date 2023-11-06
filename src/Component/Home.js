const Home = () => {

    const handleClick =() =>{
        console.log("clicking me !!!");
    }

    const handleClickAgian = (name,e ) => {
        console.log('hello' + name,e.target);
    }

    return (
      <div className="home">
        <h2>Homepage</h2>
        <button onClick ={handleClick}>Click Me</button>
        <button onClick ={(e) => 
            handleClickAgian("mario",e)
            }>Click Me Agian</button>
      </div>
    );
  }
   
  export default Home;